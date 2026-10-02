/* =====================================================
   SIT ARCHIVE - AUTH MANAGER
   Supabase Auth — Google OAuth only
   Restricted to SIT campus emails only:
     @sithyd.siu.edu.in  (Hyderabad)
     @sitpune.siu.edu.in     (Pune)
     @sitnagpur.siu.edu.in   (Nagpur)
   - Logged-in users: bookmarks & recently viewed synced to cloud
   - Guests: no session data saved locally
   ===================================================== */

const AUTH_SUPABASE_URL = 'https://etlkpjbsculcnrymhflw.supabase.co';
const AUTH_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bGtwamJzY3VsY25yeW1oZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTk4NjgsImV4cCI6MjEwNDc5NTg2OH0.PNdvzEujn7F5AJu-GK-5GyVshkZIF9jQAOOof8AiG84';

// All allowed SIT campus email domains
const AUTH_ALLOWED_DOMAINS = [
    'sithyd.siu.edu.in',   // SIT Hyderabad
    'sitpune.siu.edu.in',       // SIT Pune
    'sitnagpur.siu.edu.in',     // SIT Nagpur
];

// Campus info lookup by domain
const AUTH_CAMPUS_INFO = {
    'sithyd.siu.edu.in': { name: 'SIT Hyderabad', short: 'SITHYD', dbKey: 'SITHYD' },
    'sitpune.siu.edu.in':    { name: 'SIT Pune',      short: 'SITPUNE', dbKey: 'SITPUNE' },
    'sitnagpur.siu.edu.in':  { name: 'SIT Nagpur',    short: 'SITNAG',  dbKey: 'SITNAG' },
};

function _isAllowedEmail(email) {
    if (typeof email !== 'string') return false;
    const lower = email.toLowerCase();
    return AUTH_ALLOWED_DOMAINS.some(domain => lower.endsWith('@' + domain));
}

function _getCampusFromEmail(email) {
    if (typeof email !== 'string') return null;
    const lower = email.toLowerCase();
    const domain = AUTH_ALLOWED_DOMAINS.find(d => lower.endsWith('@' + d));
    return domain ? AUTH_CAMPUS_INFO[domain] : null;
}

window.AuthManager = (() => {
    let _session = null;
    let _listeners = [];
    let _bookmarksCache = [];
    let _historyCache = [];
    let _ready = false;

    function _headers(token) {
        return {
            'apikey': AUTH_SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${token || AUTH_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
        };
    }

    async function _supabaseFetch(path, opts = {}) {
        const token = _session?.access_token || AUTH_SUPABASE_ANON_KEY;
        return fetch(`${AUTH_SUPABASE_URL}${path}`, {
            ...opts,
            headers: { ..._headers(token), ...(opts.headers || {}) }
        });
    }

    
    async function _preloadCaches() {
        if (!_session) return;
        try {
            const [bRes, hRes] = await Promise.all([
                _supabaseFetch('/rest/v1/user_bookmarks?select=*'),
                _supabaseFetch('/rest/v1/user_recently_viewed?select=*')
            ]);
            if (bRes.ok) _bookmarksCache = await bRes.json();
            if (hRes.ok) _historyCache = await hRes.json();
            
            // Notify UI to re-render bookmark icons
            window.dispatchEvent(new Event('auth_cache_loaded'));
        } catch (err) { console.error('Cache preload failed', err); }
    }

    // ── Session management ──────────────────────────────
    function _saveSession(session) {
        _session = session;
        if (session) {
            localStorage.setItem('sit_auth_session', JSON.stringify(session));
            _preloadCaches();
        } else {
            localStorage.removeItem('sit_auth_session');
            _bookmarksCache = [];
            _historyCache = [];
            window.dispatchEvent(new Event('auth_cache_loaded'));
        }
        _notify();
    }

    function _loadStoredSession() {
        try {
            const raw = localStorage.getItem('sit_auth_session');
            if (!raw) return null;
            const s = JSON.parse(raw);
            // Check if expired (with 60s buffer)
            if (s.expires_at && Date.now() / 1000 > s.expires_at - 60) {
                localStorage.removeItem('sit_auth_session');
            _bookmarksCache = [];
            _historyCache = [];
                return null;
            }
            return s;
        } catch { return null; }
    }

    function _notify() {
        _listeners.forEach(fn => fn(_session));
    }

    // ── OAuth & Auth flows ──────────────────────────────
    async function signInWithGoogle() {
        const redirectTo = encodeURIComponent(window.location.origin + '/profile.html');
        // Using implicit flow (response_type=token) — access_token comes back in URL hash.
        // PKCE (response_type=code) requires a stored code_verifier which we don't implement.
        window.location.href =
            `${AUTH_SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}&response_type=token&scopes=email+profile&prompt=select_account&apikey=${AUTH_SUPABASE_ANON_KEY}`;
    }

    async function signOut() {
        if (_session?.access_token) {
            await _supabaseFetch('/auth/v1/logout', { method: 'POST' }).catch(() => {});
        }
        _saveSession(null);
    }

    // ── Domain gate — call this right after getting the user object ──
    async function _domainCheck(access_token, user) {
        if (!_isAllowedEmail(user?.email)) {
            // Sign out from Supabase immediately
            await fetch(`${AUTH_SUPABASE_URL}/auth/v1/logout`, {
                method: 'POST',
                headers: _headers(access_token)
            }).catch(() => {});
            // Clean URL and signal domain error
            history.replaceState(null, '', window.location.pathname + '?auth_error=domain');
            return false;
        }
        return true;
    }

    // Handle OAuth callback token in URL hash/query
    async function _handleCallback() {
        const hash = window.location.hash;
        const search = window.location.search;

        if ((hash && hash.includes('access_token')) || (search && search.includes('code='))) {
            // Clean the URL synchronously immediately to prevent copying/leaking tokens
            history.replaceState(null, '', window.location.pathname);
        }

        // Check for access_token in hash (implicit flow)
        if (hash && hash.includes('access_token')) {
            const params = new URLSearchParams(hash.slice(1));
            const access_token = params.get('access_token');
            const refresh_token = params.get('refresh_token');
            const expires_at = Date.now() / 1000 + parseInt(params.get('expires_in') || '3600');

            if (access_token) {
                const userRes = await fetch(`${AUTH_SUPABASE_URL}/auth/v1/user`, {
                    headers: _headers(access_token)
                });
                if (userRes.ok) {
                    const user = await userRes.json();
                    const allowed = await _domainCheck(access_token, user);
                    if (!allowed) return 'domain_error';
                    _saveSession({ access_token, refresh_token, expires_at, user });
                    return true;
                }
            }
        }

        // Check for code in query params (PKCE flow)
        if (search && search.includes('code=')) {
            const params = new URLSearchParams(search);
            const code = params.get('code');
            if (code) {
                const res = await _supabaseFetch('/auth/v1/token?grant_type=pkce', {
                    method: 'POST',
                    body: JSON.stringify({ auth_code: code })
                });
                if (res.ok) {
                    const data = await res.json();
                    const userRes = await fetch(`${AUTH_SUPABASE_URL}/auth/v1/user`, {
                        headers: _headers(data.access_token)
                    });
                    if (userRes.ok) {
                        const user = await userRes.json();
                        const allowed = await _domainCheck(data.access_token, user);
                        if (!allowed) return 'domain_error';
                        _saveSession({
                            access_token: data.access_token,
                            refresh_token: data.refresh_token,
                            expires_at: Date.now() / 1000 + (data.expires_in || 3600),
                            user
                        });
                        return true;
                    }
                }
            }
        }

        // Check for pre-set domain error in URL (from a previous redirect)
        if (search && search.includes('auth_error=domain')) {
            history.replaceState(null, '', window.location.pathname);
            return 'domain_error';
        }

        return false;
    }

    // ── Bookmarks (cloud sync) ───────────────────────────
    async function getBookmarks() {
        if (!_session) return [];
        try {
            const res = await _supabaseFetch(`/rest/v1/user_bookmarks?user_id=eq.${_session.user.id}&order=saved_at.desc`);
            if (res.ok) {
                const rows = await res.json();
                return rows.map(r => ({
                    name: r.paper_name,
                    code: r.paper_code,
                    file: r.paper_file,
                    type: r.paper_type,
                    path: JSON.parse(r.paper_path || '[]'),
                    savedAt: r.saved_at
                }));
            }
        } catch {}
        return [];
    }

    async function addBookmark(paper) {
        if (!_session) return;
        await _supabaseFetch('/rest/v1/user_bookmarks', {
            method: 'POST',
            headers: { 'Prefer': 'resolution=merge-duplicates' },
            body: JSON.stringify({
                user_id: _session.user.id,
                paper_code: paper.code,
                paper_name: paper.name,
                paper_file: paper.file,
                paper_type: paper.type || '',
                paper_path: JSON.stringify(Array.isArray(paper.path) ? paper.path : []),
                saved_at: new Date().toISOString()
            })
        }).catch(() => {});
        // Update memory cache
        _bookmarksCache = _bookmarksCache.filter(b => b.paper_code !== paper.code);
        _bookmarksCache.unshift({ paper_code: paper.code, paper_name: paper.name, file_url: paper.file, paper_type: paper.type, paper_path: JSON.stringify(paper.path) });
        window.dispatchEvent(new Event('auth_cache_loaded'));
    }

    async function removeBookmark(paperCode) {
        if (!_session) return;
        await _supabaseFetch(`/rest/v1/user_bookmarks?user_id=eq.${_session.user.id}&paper_code=eq.${encodeURIComponent(paperCode)}`, {
            method: 'DELETE'
        }).catch(() => {});
        // Update memory cache
        _bookmarksCache = _bookmarksCache.filter(b => b.paper_code !== paperCode);
        window.dispatchEvent(new Event('auth_cache_loaded'));
    }

    async function isBookmarked(paperCode) {
        if (!_session) return false;
        return _bookmarksCache.some(b => b.paper_code === paperCode);
    }

    // ── Recently Viewed (cloud sync) ─────────────────────
    async function getRecentlyViewed() {
        if (!_session) return [];
        try {
            const res = await _supabaseFetch(
                `/rest/v1/user_recently_viewed?user_id=eq.${_session.user.id}&order=viewed_at.desc&limit=15`
            );
            if (res.ok) {
                const rows = await res.json();
                return rows.map(r => ({
                    name: r.paper_name,
                    code: r.paper_code,
                    file: r.paper_file,
                    type: r.paper_type,
                    path: JSON.parse(r.paper_path || '[]'),
                    timestamp: new Date(r.viewed_at).getTime()
                }));
            }
        } catch {}
        return [];
    }

    async function saveRecentlyViewed(paper) {
        if (!_session) return;
        await _supabaseFetch('/rest/v1/user_recently_viewed', {
            method: 'POST',
            headers: { 'Prefer': 'resolution=merge-duplicates' },
            body: JSON.stringify({
                user_id: _session.user.id,
                paper_code: paper.code,
                paper_name: paper.name,
                paper_file: paper.file,
                paper_type: paper.type || '',
                paper_path: JSON.stringify(Array.isArray(paper.path) ? paper.path : []),
                viewed_at: new Date().toISOString()
            })
        }).catch(() => {});
        // Update memory cache
        _historyCache = _historyCache.filter(b => b.paper_code !== paper.code);
        _historyCache.unshift({ paper_code: paper.code, paper_name: paper.name, file_url: paper.file, paper_type: paper.type, paper_path: JSON.stringify(paper.path) });
    }

    // ── Init ─────────────────────────────────────────────
    let _domainError = false;

    async function init() {
        // 1. Try to restore from callback URL
        const fromCallback = await _handleCallback();
        if (fromCallback === 'domain_error') {
            _domainError = true;
            _ready = true;
            _notify();
            return;
        }
        if (fromCallback) { _ready = true; _notify(); return; }

        // 2. Try to restore from localStorage
        const stored = _loadStoredSession();
        if (stored) {
            // Verify session is still valid
            const res = await fetch(`${AUTH_SUPABASE_URL}/auth/v1/user`, {
                headers: _headers(stored.access_token)
            }).catch(() => null);
            if (res && res.ok) {
                const user = await res.json();
                _session = { ...stored, user };
                _ready = true;
                _notify();
                _preloadCaches();
            } else {
                _ready = true;
                _saveSession(null);
            }
        } else {
            _ready = true;
            _notify();
        }
    }

    function getSession() { return _session; }
    function getUser() { return _session?.user || null; }
    function isLoggedIn() { return !!_session; }
    function isDomainError() { return _domainError; }
    function onAuthChange(fn) { _listeners.push(fn); if (_ready) fn(_session); }

    return {
        init,
        signInWithGoogle,
        signOut,
        getSession,
        getUser,
        isLoggedIn,
        isDomainError,
        onAuthChange,
        getCampusFromEmail: _getCampusFromEmail,
        
        getCachedBookmarks: () => _bookmarksCache,
        getCachedHistory: () => _historyCache,
        getBookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        getRecentlyViewed,
        saveRecentlyViewed
    };
})();
