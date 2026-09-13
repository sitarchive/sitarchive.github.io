const STATS_SUPABASE_URL = 'https://etlkpjbsculcnrymhflw.supabase.co';
const STATS_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bGtwamJzY3VsY25yeW1oZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTk4NjgsImV4cCI6MjEwNDc5NTg2OH0.PNdvzEujn7F5AJu-GK-5GyVshkZIF9jQAOOof8AiG84';

window.PaperStats = {
    statsMap: {},

    async init() {
        try {
            const response = await fetch(`${STATS_SUPABASE_URL}/rest/v1/paper_stats?select=file_path,downloads,upvotes,downvotes`, {
                headers: {
                    'apikey': STATS_SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${STATS_SUPABASE_ANON_KEY}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                data.forEach(item => {
                    this.statsMap[item.file_path] = item;
                });
            }
        } catch (e) {
            console.error('Failed to load paper stats', e);
        }
    },

    getStats(filePath) {
        return this.statsMap[filePath] || { downloads: 0, upvotes: 0, downvotes: 0 };
    },

    async recordDownload(filePath) {
        // Increment locally for immediate UI update
        if (!this.statsMap[filePath]) {
            this.statsMap[filePath] = { downloads: 0, upvotes: 0, downvotes: 0 };
        }
        this.statsMap[filePath].downloads++;

        // Send to Edge Function
        fetch(`${STATS_SUPABASE_URL}/functions/v1/track-interaction`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file_path: filePath, action: 'download' })
        }).catch(() => {});
    },

    async votePaper(filePath, voteType) { // voteType is 'upvote' or 'downvote'
        // Increment locally for immediate UI update
        if (!this.statsMap[filePath]) {
            this.statsMap[filePath] = { downloads: 0, upvotes: 0, downvotes: 0 };
        }
        
        if (voteType === 'upvote') this.statsMap[filePath].upvotes++;
        else if (voteType === 'downvote') this.statsMap[filePath].downvotes++;

        // Send to Edge Function
        fetch(`${STATS_SUPABASE_URL}/functions/v1/track-interaction`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file_path: filePath, action: voteType })
        }).catch(() => {});
    }
};

window.handleVote = function(btn, filePath, type) {
    if (localStorage.getItem('voted_' + filePath)) return; // Prevent multiple votes

    // Update UI immediately
    const span = btn.querySelector('span:last-child') || btn;
    const currentVal = parseInt(span.textContent.replace(/[^0-9]/g, '')) || 0;
    span.innerHTML = span.innerHTML.replace(/[0-9]+/, currentVal + 1);

    // Disable both buttons in the group
    const group = btn.parentElement;
    group.querySelectorAll('button').forEach(b => {
        b.classList.add('opacity-50', 'cursor-not-allowed');
    });

    localStorage.setItem('voted_' + filePath, 'true');

    if (window.PaperStats) {
        const actionType = type === 'up' ? 'upvote' : 'downvote';
        window.PaperStats.votePaper(filePath, actionType);
    }
};
