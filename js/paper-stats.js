const STATS_SUPABASE_URL = 'https://etlkpjbsculcnrymhflw.supabase.co';
const STATS_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bGtwamJzY3VsY25yeW1oZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTk4NjgsImV4cCI6MjEwNDc5NTg2OH0.PNdvzEujn7F5AJu-GK-5GyVshkZIF9jQAOOof8AiG84';

window.PaperStats = {
    statsMap: {},

    async init() {
        try {
            const response = await fetch(`${STATS_SUPABASE_URL}/rest/v1/paper_stats?select=file_path,downloads,upvotes,downvotes`, {
                cache: 'no-store',
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
        if (!this.statsMap[filePath]) {
            this.statsMap[filePath] = { downloads: 0, upvotes: 0, downvotes: 0 };
        }
        this.statsMap[filePath].downloads++;

        fetch(`${STATS_SUPABASE_URL}/functions/v1/track-interaction`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STATS_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({ file_path: filePath, action: 'download' })
        }).catch(() => {});
    },

    async votePaper(filePath, action) {
        if (!this.statsMap[filePath]) {
            this.statsMap[filePath] = { downloads: 0, upvotes: 0, downvotes: 0 };
        }
        
        let apiAction = action;
        if (action === 'up') {
            this.statsMap[filePath].upvotes++;
            apiAction = 'upvote';
        } else if (action === 'down') {
            this.statsMap[filePath].downvotes++;
            apiAction = 'downvote';
        } else if (action === 'undo_up') {
            this.statsMap[filePath].upvotes = Math.max(0, this.statsMap[filePath].upvotes - 1);
            apiAction = 'undo_upvote';
        } else if (action === 'undo_down') {
            this.statsMap[filePath].downvotes = Math.max(0, this.statsMap[filePath].downvotes - 1);
            apiAction = 'undo_downvote';
        }

        fetch(`${STATS_SUPABASE_URL}/functions/v1/track-interaction`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STATS_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({ file_path: filePath, action: apiAction })
        }).catch(() => {});
    }
};

window.handleVote = function(btn, filePath, type) {
    let existingVote = localStorage.getItem('voted_' + filePath);
    
    // Handle legacy votes which were just stored as 'true'
    if (existingVote === 'true') {
        existingVote = type; // Assume they clicked what they previously voted for to let them undo it
    }
    
    const container = btn.closest('.flex.items-center.gap-2');
    const upBtn = container.querySelector('button[title="Helpful"]');
    const downBtn = container.querySelector('button[title="Not Helpful"]');
    
    if (existingVote) {
        if (existingVote === type) {
            // UNDO VOTE
            localStorage.removeItem('voted_' + filePath);
            
            // Decrement UI
            const span = btn.querySelector('.vote-count');
            const currentVal = parseInt(span.textContent) || 0;
            span.textContent = Math.max(0, currentVal - 1);
            
            // Reset button classes
            upBtn.className = "flex items-center gap-1 transition-colors hover:text-green-500";
            downBtn.className = "flex items-center gap-1 transition-colors hover:text-red-500";
            
            if (window.PaperStats) {
                window.PaperStats.votePaper(filePath, 'undo_' + type);
            }
            return;
        } else {
            // Tried to vote differently
            alert("Please undo your previous vote first by clicking it again.");
            return;
        }
    }

    // NEW VOTE
    const span = btn.querySelector('.vote-count');
    const currentVal = parseInt(span.textContent) || 0;
    span.textContent = currentVal + 1;
    
    // Mark as voted in UI
    if (type === 'up') {
        upBtn.className = "flex items-center gap-1 transition-colors text-green-500 font-bold";
        downBtn.className = "flex items-center gap-1 transition-colors opacity-50";
    } else {
        downBtn.className = "flex items-center gap-1 transition-colors text-red-500 font-bold";
        upBtn.className = "flex items-center gap-1 transition-colors opacity-50";
    }

    // Store in localStorage
    localStorage.setItem('voted_' + filePath, type);

    // Send to backend
    if (window.PaperStats) {
        window.PaperStats.votePaper(filePath, type);
    }
};
