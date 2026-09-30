/* =====================================================
   SIT ARCHIVE - NAV AUTH UI
   Auto-injects Sign In / Profile button into every page nav.
   Handles 3 slots:
     - #nav-auth-slot           → desktop nav (full button)
     - #nav-auth-slot-mobile-icon → mobile top bar (compact icon only)
     - #nav-auth-slot-mobile    → mobile slide-out menu (full row)
   Load AFTER auth.js and theme.js.
   ===================================================== */

// Works with all SIT campus domains: sithyd.siu.edu.in, sitpune.edu.in, sitnagpur.edu.in
window.NavAuth = (() => {
    function _getInitials(user) {
        const name = user?.user_metadata?.full_name || user?.email || '?';
        return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
    }
    function _getAvatar(user) {
        return user?.user_metadata?.avatar_url || null;
    }
    function _getDisplayName(user) {
        return user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student';
    }

    // ── Desktop: full Sign In button ─────────────────────────────────────────
    function _renderGuestDesktop() {
        return `
        <a href="profile.html"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark bg-bg-light-secondary dark:bg-bg-dark-secondary hover:border-primary/50 hover:text-primary transition-colors text-sm font-semibold whitespace-nowrap">
            <span class="material-symbols-outlined text-[18px]">login</span>
            Sign In
        </a>`;
    }

    function _renderUserDesktop(user) {
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const name = _getDisplayName(user);
        const avatarHtml = avatar
            ? `<img src="${avatar}" alt="${name}" class="w-7 h-7 rounded-full object-cover border border-border-light dark:border-border-dark">`
            : `<div class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold shrink-0">${initials}</div>`;

        return `
        <div class="relative" id="nav-user-dropdown-wrap">
            <button onclick="NavAuth.toggleUserDropdown()" type="button"
                class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border-light dark:border-border-dark bg-bg-light-secondary dark:bg-bg-dark-secondary hover:border-primary/50 transition-colors">
                ${avatarHtml}
                <span class="hidden lg:inline text-sm font-semibold max-w-[90px] truncate">${name}</span>
                <span class="material-symbols-outlined text-[15px] text-text-light-muted dark:text-text-dark-muted">expand_more</span>
            </button>
            <div id="nav-user-dropdown"
                class="hidden absolute right-0 mt-2 w-52 rounded-xl border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark-secondary shadow-lg py-2 z-50">
                <div class="px-4 py-2 border-b border-border-light dark:border-border-dark">
                    <p class="text-xs font-bold truncate">${name}</p>
                    <p class="text-[11px] text-text-light-muted dark:text-text-dark-muted truncate">${user?.email || ''}</p>
                </div>
                <a href="profile.html" class="flex items-center gap-2 px-4 py-2.5 text-sm text-text-light-muted dark:text-text-dark-muted hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary hover:text-text-light dark:hover:text-text-dark transition-colors">
                    <span class="material-symbols-outlined text-[17px]">person</span> My Profile
                </a>
                <a href="profile.html#bookmarks" class="flex items-center gap-2 px-4 py-2.5 text-sm text-text-light-muted dark:text-text-dark-muted hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary hover:text-text-light dark:hover:text-text-dark transition-colors">
                    <span class="material-symbols-outlined text-[17px]">bookmark</span> Bookmarks
                </a>
                <a href="profile.html#history" class="flex items-center gap-2 px-4 py-2.5 text-sm text-text-light-muted dark:text-text-dark-muted hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary hover:text-text-light dark:hover:text-text-dark transition-colors">
                    <span class="material-symbols-outlined text-[17px]">history</span> Recently Viewed
                </a>
                <div class="border-t border-border-light dark:border-border-dark mt-1 pt-1">
                    <button onclick="NavAuth.signOut()" type="button"
                        class="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                        <span class="material-symbols-outlined text-[17px]">logout</span> Sign Out
                    </button>
                </div>
            </div>
        </div>`;
    }

    // ── Mobile top bar: compact icon only ────────────────────────────────────
    function _renderGuestMobileIcon() {
        return `<a href="profile.html" title="Sign In"
            class="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light dark:border-border-dark bg-bg-light-secondary dark:bg-bg-dark-secondary hover:border-primary/50 hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[20px]">login</span>
        </a>`;
    }

    function _renderUserMobileIcon(user) {
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const name = _getDisplayName(user);
        return avatar
            ? `<a href="profile.html" title="${name}" class="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border-2 border-primary/40">
                <img src="${avatar}" alt="${name}" class="w-full h-full object-cover">
               </a>`
            : `<a href="profile.html" title="${name}"
                class="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white text-[12px] font-bold border-2 border-primary/40">
                ${initials}
               </a>`;
    }

    // ── Mobile menu: full row ────────────────────────────────────────────────
    function _renderGuestMobileMenu() {
        return `<a href="profile.html"
            class="flex items-center gap-3 py-2 text-sm font-semibold text-primary">
            <span class="material-symbols-outlined text-[20px]">login</span>
            Sign In to Sync Bookmarks
        </a>`;
    }

    function _renderUserMobileMenu(user) {
        const name = _getDisplayName(user);
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const avatarHtml = avatar
            ? `<img src="${avatar}" alt="${name}" class="w-8 h-8 rounded-full object-cover border border-border-light dark:border-border-dark">`
            : `<div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">${initials}</div>`;
        return `
        <div class="flex items-center justify-between py-1">
            <a href="profile.html" class="flex items-center gap-3 flex-1 min-w-0">
                ${avatarHtml}
                <div class="min-w-0">
                    <p class="text-sm font-bold truncate">${name}</p>
                    <p class="text-[11px] text-text-light-muted dark:text-text-dark-muted truncate">${user?.email || ''}</p>
                </div>
            </a>
            <button onclick="NavAuth.signOut()" type="button" title="Sign Out"
                class="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors shrink-0">
                <span class="material-symbols-outlined text-[20px]">logout</span>
            </button>
        </div>`;
    }

    // ── Inject into all slots ────────────────────────────────────────────────
    function _inject(session) {
        const user = session?.user || null;

        const slots = {
            'nav-auth-slot':             user ? _renderUserDesktop(user)    : _renderGuestDesktop(),
            'nav-auth-slot-mobile-icon': user ? _renderUserMobileIcon(user) : _renderGuestMobileIcon(),
            'nav-auth-slot-mobile':      user ? _renderUserMobileMenu(user) : _renderGuestMobileMenu(),
        };

        Object.entries(slots).forEach(([id, html]) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = html.trim();
        });

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            const wrap = document.getElementById('nav-user-dropdown-wrap');
            const menu = document.getElementById('nav-user-dropdown');
            if (wrap && menu && !wrap.contains(e.target)) menu.classList.add('hidden');
        });
    }

    function toggleUserDropdown() {
        const menu = document.getElementById('nav-user-dropdown');
        if (menu) menu.classList.toggle('hidden');
    }

    async function signOut() {
        await AuthManager.signOut();
        window.location.href = 'index.html';
    }

    async function init() {
        await AuthManager.init();
        AuthManager.onAuthChange(session => _inject(session));
    }

    return { init, toggleUserDropdown, signOut };
})();

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => NavAuth.init());
