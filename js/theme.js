/**
 * SIT Archive Theme Management
 * Handles dark/light theme toggle with localStorage persistence
 */

const THEME_KEY = 'sit-archive-theme';

// Initialize theme on page load
function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    // Default to light theme if no preference saved
    const isDark = saved ? saved === 'dark' : false;

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


// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://etlkpjbsculcnrymhflw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bGtwamJzY3VsY25yeW1oZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTk4NjgsImV4cCI6MjEwNDc5NTg2OH0.PNdvzEujn7F5AJu-GK-5GyVshkZIF9jQAOOof8AiG84';

// ===== VISITOR COUNTER =====
function initVisitorCounter() {
    const el = document.getElementById('visitor-count');
    if (!el) return;
    
    const hasVisited = localStorage.getItem('sit_visited');
    
    if (!hasVisited) {
        localStorage.setItem('sit_visited', '1');
        // Increment via RPC
        fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_visitors`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            },
            body: '{}'
        })
        .then(r => r.json())
        .then(count => { if (count != null) el.textContent = Number(count).toLocaleString(); })
        .catch(() => { el.textContent = '—'; });
    } else {
        // Just read the count
        fetch(`${SUPABASE_URL}/rest/v1/rpc/get_visitors`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            },
            body: '{}'
        })
        .then(r => r.json())
        .then(count => { if (count != null) el.textContent = Number(count).toLocaleString(); })
        .catch(() => { el.textContent = '—'; });
    }
}
document.addEventListener('DOMContentLoaded', initVisitorCounter);
