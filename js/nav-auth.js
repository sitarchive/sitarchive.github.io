/* =====================================================
   SIT ARCHIVE - NAV AUTH UI
   Injects a simple login/avatar icon into every page nav.
   Design: matches the theme-toggle button style exactly.
   
   Slots:
     #nav-auth-slot              → desktop nav icon
     #nav-auth-slot-mobile-icon  → mobile top bar icon
     #nav-auth-slot-mobile       → mobile slide-out menu row
   ===================================================== */

// Works with all SIT campus domains: sithyd.siu.edu.in, sitpune.siu.edu.in, sitnagpur.siu.edu.in
window.NavAuth = (() => {

    function _getInitials(user) {
        const name = user?.user_metadata?.full_name || user?.email || '?';
        return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
    }
    function _getAvatar(user) { return user?.user_metadata?.avatar_url || null; }
    function _getDisplayName(user) {
        return user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student';
    }

    // ── Desktop / mobile-icon: same square button style as theme toggle ──────
    function _renderGuestIcon() {
        // Same size/style as the theme toggle button — just a login icon
        return `<a href="profile.html" title="Sign In"
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-light-secondary dark:bg-bg-dark-secondary hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary border border-border-light dark:border-border-dark transition-colors">
            <span class="material-symbols-outlined text-[20px]">login</span>
        </a>`;
    }

    function _renderUserIcon(user) {
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const name = _getDisplayName(user);

        const avatarHtml = avatar
            ? `<img src="${avatar}" alt="${name}" class="w-full h-full object-cover">`
            : `<span class="text-[11px] font-bold">${initials}</span>`;

        // dropdown menu
        const dropdown = `
        <div id="nav-user-dropdown"
            class="hidden absolute right-0 mt-2 w-52 rounded-xl border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark-secondary shadow-xl py-2 z-50">
            <div class="px-4 py-2 border-b border-border-light dark:border-border-dark mb-1">
                <p class="text-xs font-bold truncate">${name}</p>
                <p class="text-[11px] text-text-light-muted dark:text-text-dark-muted truncate">${user?.email || ''}</p>
            </div>
            <a href="profile.html" class="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary transition-colors">
                <span class="material-symbols-outlined text-[17px] text-primary">person</span> My Profile
            </a>
            <a href="profile.html#bookmarks" class="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary transition-colors">
                <span class="material-symbols-outlined text-[17px] text-primary">bookmark</span> Bookmarks
            </a>
            <a href="profile.html#history" class="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-bg-light-tertiary dark:hover:bg-bg-dark-tertiary transition-colors">
                <span class="material-symbols-outlined text-[17px] text-primary">history</span> Recently Viewed
            </a>
            <div class="border-t border-border-light dark:border-border-dark mt-1 pt-1">
                <button onclick="NavAuth.signOut()" type="button"
                    class="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <span class="material-symbols-outlined text-[17px]">logout</span> Sign Out
                </button>
            </div>
        </div>`;

        // The avatar button — same height/size as theme toggle (w-10 h-10)
        return `
        <div class="relative" id="nav-user-dropdown-wrap">
            <button onclick="NavAuth.toggleUserDropdown()" type="button" title="${name}"
                class="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-primary/30 bg-primary/10 hover:border-primary/60 transition-colors overflow-hidden">
                ${avatarHtml}
            </button>
            ${dropdown}
        </div>`;
    }

    // ── Mobile top bar: compact icon (same as desktop) ────────────────────────
    function _renderGuestMobileIcon() {
        return `<a href="profile.html" title="Sign In"
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-light-secondary dark:bg-bg-dark-secondary border border-border-light dark:border-border-dark hover:border-primary/50 hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[20px]">login</span>
        </a>`;
    }

    function _renderUserMobileIcon(user) {
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const name = _getDisplayName(user);
        return avatar
            ? `<a href="profile.html" title="${name}"
                class="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-primary/40 overflow-hidden">
                <img src="${avatar}" alt="${name}" class="w-full h-full object-cover">
               </a>`
            : `<a href="profile.html" title="${name}"
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white text-[11px] font-bold border-2 border-primary/50">
                ${initials}
               </a>`;
    }

    // ── Mobile slide-out menu row ─────────────────────────────────────────────
    function _renderGuestMobileMenu() {
        return `<a href="profile.html"
            class="flex items-center gap-3 py-2 text-sm font-semibold text-primary">
            <span class="material-symbols-outlined text-[20px]">login</span>Sign In
        </a>`;
    }

    function _renderUserMobileMenu(user) {
        const name = _getDisplayName(user);
        const initials = _getInitials(user);
        const avatar = _getAvatar(user);
        const avatarHtml = avatar
            ? `<img src="${avatar}" alt="${name}" class="w-8 h-8 rounded-lg object-cover border border-border-light dark:border-border-dark">`
            : `<div class="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">${initials}</div>`;
        return `
        <div class="flex items-center justify-between">
            <a href="profile.html" class="flex items-center gap-2 min-w-0 flex-1">
                ${avatarHtml}
                <div class="min-w-0">
                    <p class="text-sm font-bold truncate">${name}</p>
                    <p class="text-[11px] text-primary">View Profile →</p>
                </div>
            </a>
            <button onclick="NavAuth.signOut()" type="button" title="Sign Out"
                class="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors shrink-0">
                <span class="material-symbols-outlined text-[20px]">logout</span>
            </button>
        </div>`;
    }

    // ── Inject into all slots ──────────────────────────────────────────────────
    function _inject(session) {
        const user = session?.user || null;

        const desktopHtml    = user ? _renderUserIcon(user)       : _renderGuestIcon();
        const mobileIconHtml = user ? _renderUserMobileIcon(user) : _renderGuestMobileIcon();
        const mobileMenuHtml = user ? _renderUserMobileMenu(user) : _renderGuestMobileMenu();

        [
            ['nav-auth-slot',             desktopHtml],
            ['nav-auth-slot-mobile-icon', mobileIconHtml],
            ['nav-auth-slot-mobile',      mobileMenuHtml],
        ].forEach(([id, html]) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = html.trim();
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

document.addEventListener('DOMContentLoaded', () => NavAuth.init());

// Close dropdown on outside click (bind once globally)
document.addEventListener('click', (e) => {
    const wrap = document.getElementById('nav-user-dropdown-wrap');
    const menu = document.getElementById('nav-user-dropdown');
    if (wrap && menu && !wrap.contains(e.target)) menu.classList.add('hidden');
}, true);
