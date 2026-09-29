/* =====================================================
   SIT ARCHIVE - AUTH MANAGER
   Supabase Auth — Google OAuth only
   Restricted to @sithyd.siu.edu.in domain.
   - Logged-in users: bookmarks & recently viewed synced to cloud
   - Guests: localStorage only (no change in experience)
   ===================================================== */

const AUTH_SUPABASE_URL = 'https://etlkpjbsculcnrymhflw.supabase.co';
const AUTH_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bGtwamJzY3VsY25yeW1oZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTk4NjgsImV4cCI6MjEwNDc5NTg2OH0.PNdvzEujn7F5AJu-GK-5GyVshkZIF9jQAOOof8AiG84';
const AUTH_ALLOWED_DOMAIN = 'sithyd.siu.edu.in';

function _isAllowedEmail(email) {
    return typeof email === 'string' && email.toLowerCase().endsWith('@' + AUTH_ALLOWED_DOMAIN);
}

window.AuthManager = (() => {
    let _session = null;
    let _listeners = [];

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

    // ── Session management ──────────────────────────────
    function _saveSession(session) {
        _session = session;
        if (session) {
            localStorage.setItem('sit_auth_session', JSON.stringify(session));
        } else {
            localStorage.removeItem('sit_auth_session');
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
        window.location.href =
            `${AUTH_SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}&access_type=offline&response_type=code&scopes=email+profile&hd=${AUTH_ALLOWED_DOMAIN}&apikey=${AUTH_SUPABASE_ANON_KEY}`;
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
                    history.replaceState(null, '', window.location.pathname);
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
                        history.replaceState(null, '', window.location.pathname);
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
        if (!_session) {
            // Guest: localStorage
            try { return JSON.parse(localStorage.getItem('sit_archive_bookmarks') || '[]'); }
            catch { return []; }
        }
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
        // Always save locally too
        let local = [];
        try { local = JSON.parse(localStorage.getItem('sit_archive_bookmarks') || '[]'); } catch {}
        local = local.filter(b => b.code !== paper.code);
        local.unshift({ ...paper, savedAt: Date.now() });
        localStorage.setItem('sit_archive_bookmarks', JSON.stringify(local));

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
    }

    async function removeBookmark(paperCode) {
        let local = [];
        try { local = JSON.parse(localStorage.getItem('sit_archive_bookmarks') || '[]'); } catch {}
        local = local.filter(b => b.code !== paperCode);
        localStorage.setItem('sit_archive_bookmarks', JSON.stringify(local));

        if (!_session) return;
        await _supabaseFetch(`/rest/v1/user_bookmarks?user_id=eq.${_session.user.id}&paper_code=eq.${encodeURIComponent(paperCode)}`, {
            method: 'DELETE'
        }).catch(() => {});
    }

    async function isBookmarked(paperCode) {
        let local = [];
        try { local = JSON.parse(localStorage.getItem('sit_archive_bookmarks') || '[]'); } catch {}
        return local.some(b => b.code === paperCode);
    }

    // ── Recently Viewed (cloud sync) ─────────────────────
    async function getRecentlyViewed() {
        if (!_session) {
            try { return JSON.parse(localStorage.getItem('sit_archive_recent') || '[]'); }
            catch { return []; }
        }
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
        // Always save locally
        let local = [];
        try { local = JSON.parse(localStorage.getItem('sit_archive_recent') || '[]'); } catch {}
        local = local.filter(r => r.code !== paper.code);
        local.unshift({ ...paper, timestamp: Date.now() });
        if (local.length > 15) local.pop();
        localStorage.setItem('sit_archive_recent', JSON.stringify(local));

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
    }

    // ── Init ─────────────────────────────────────────────
    let _domainError = false;

    async function init() {
        // 1. Try to restore from callback URL
        const fromCallback = await _handleCallback();
        if (fromCallback === 'domain_error') {
            _domainError = true;
            _notify();
            return;
        }
        if (fromCallback) return;

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
                _notify();
            } else {
                _saveSession(null);
            }
        }
    }

    function getSession() { return _session; }
    function getUser() { return _session?.user || null; }
    function isLoggedIn() { return !!_session; }
    function isDomainError() { return _domainError; }
    function onAuthChange(fn) { _listeners.push(fn); fn(_session); }

    return {
        init,
        signInWithGoogle,
        signOut,
        getSession,
        getUser,
        isLoggedIn,
        isDomainError,
        onAuthChange,
        getBookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        getRecentlyViewed,
        saveRecentlyViewed
    };
})();

