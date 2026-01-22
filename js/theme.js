/**
 * SIT Archive Theme Management
 * Handles dark/light theme toggle with localStorage persistence
 */

const THEME_KEY = 'sit-archive-theme';

// Initialize theme on page load
function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', isDark);
    updateToggleIcon(isDark);
}

// Toggle between dark and light theme
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateToggleIcon(isDark);
}

// Update the theme toggle button icon
function updateToggleIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
        document.documentElement.classList.toggle('dark', e.matches);
        updateToggleIcon(e.matches);
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initTheme);

// Also run immediately in case DOM is already loaded
if (document.readyState !== 'loading') {
    initTheme();
}
