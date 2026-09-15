/* =====================================================
   SIT ARCHIVE - CHANGELOG DATA
   Add new entries to the top of the relevant month's
   `entries` array (or add a new month block at the top).
   ===================================================== */

const CHANGELOG_DATA = [
    {
        "month": "September 2026",
        "subtitle": "Latest updates",
        "entries": [
            {
                "date": "Sep 15, 2026",
                "color": "indigo",
                "icon": "rocket_launch",
                "badgeText": "Features & Fixes",
                "title": "Post-Maintenance Refinements & PWA Support",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Following our recent major maintenance window, we identified a few lingering structural issues. We've rolled out a comprehensive patch to resolve these while simultaneously introducing highly requested features.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-2\"><li><strong>Progressive Web App (PWA):</strong> The archive can now be installed directly to your device home screen for offline caching and a native app experience.</li><li><strong>Frictionless Sharing:</strong> Added dedicated WhatsApp and Telegram share buttons to all paper cards for quick distribution in study groups.</li><li><strong>Empty Category Indicators:</strong> Semesters currently without uploaded papers now cleanly display a \"Coming Soon\" badge instead of leading to empty pages.</li><li><strong>Data Standardisation:</strong> Corrected residual typos in subject codes, standardised naming conventions for Mathematics papers, and repaired missing metadata on Mid-Sem exams.</li><li><strong>SEO Optimisation:</strong> Fixed malformed sitemap configurations to ensure better discoverability on search engines.</li></ul>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "blue",
                "icon": "celebration",
                "badgeText": "Maintenance Complete",
                "title": "Major Fall Maintenance Concluded",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Between <strong>September 7th and September 14th</strong>, SIT Archive underwent a massive, scheduled maintenance operation. During this week-long period, we focused on stabilizing the core architecture and overhauling existing content.</p><div class=\"bg-background-light-alt dark:bg-background-dark-alt rounded-lg p-3 border border-border-light dark:border-border-dark\"><h4 class=\"text-xs font-bold text-primary mb-2 uppercase tracking-wider\">Maintenance Highlights</h4><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-2\"><li><strong>Massive Content Drop:</strong> Successfully processed and uploaded over <strong>130+ brand new question papers</strong> across all branches (CSE, AIML, CST) covering both End-Sem and Backlog categories.</li><li><strong>Global Link Audits:</strong> Verified and replaced dozens of stale or low-quality Google Drive links with high-definition, officially scanned versions.</li><li><strong>Structural Scaling:</strong> Completely restructured the database to effortlessly handle the influx of newly created Backlog categories and dual-attempt exam sets.</li><li><strong>Banner Removal:</strong> The persistent site-wide maintenance warning banner has now been formally lifted.</li></ul><p class=\"text-xs text-text-light-muted dark:text-text-dark-muted mt-3 italic\">Thank you for your patience while we fortified the archive for the upcoming academic year!</p></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "amber",
                "icon": "build",
                "badgeText": "Bug Fixes",
                "title": "Minor Nomenclature & Date Corrections",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Corrected several incorrectly labelled exam papers across the archive for better accuracy:</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">edit</span><strong>CSE 2024-28 (Sem 1):</strong> Renamed Mathematics I \"Set 1\" and \"Set 2\" to their proper exam months (Nov 2025 and May 2025 respectively).</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">edit</span><strong>AIML 2024-28 (Sem 1):</strong> Corrected the Linear Algebra backlog paper's exam month from Nov 2026 to June 2026.</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">edit</span><strong>AIML 2024-28 (Sem 3):</strong> Updated the subject name \"Probability for Data Science\" to the officially correct \"Probability and Random Processes\".</li></ul>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "blue",
                "icon": "computer",
                "badgeText": "CST Update",
                "title": "CST 2024-28 End-Sem Upgrades",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added and fully upgraded 17 End-Sem papers for the SIT Hyderabad CST 2024-28 batch across Semesters 1, 2, 3, and 4.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 & 2 End-Sem</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming and Problem Solving</li><li>• Physics for Computer Engineers</li><li>• Mathematics I</li><li>• Communication Skills</li><li>• Statistics and Probability</li><li>• Programming in C</li><li>• Mathematics II</li><li>• Chemistry</li><li>• Basic Electrical Engineering</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 3 & 4 End-Sem</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Sensors and Microcontrollers</li><li>• Programming Paradigms</li><li>• Discrete Mathematics</li><li>• Data Structures</li><li>• Computer Organisation</li><li>• Operating Systems</li><li>• Engineering Mathematics III</li><li>• Database Management Systems</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "indigo",
                "icon": "computer",
                "badgeText": "CSE Update",
                "title": "CSE 2024-28 End-Sem Upgrades",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added and fully upgraded 17 End-Sem papers for the SIT Hyderabad CSE 2024-28 batch across Semesters 1, 2, 3, and 4.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 & 2 End-Sem</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming and Problem Solving</li><li>• Mathematics I</li><li>• Chemistry</li><li>• Basic Electrical Engineering</li><li>• Statistics and Probability</li><li>• Programming in C</li><li>• Physics for Computer Engineers</li><li>• Mathematics II</li><li>• Communication Skills</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 3 & 4 End-Sem</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Sensors and Microcontrollers</li><li>• Programming Paradigms</li><li>• Discrete Mathematics</li><li>• Data Structures</li><li>• Computer Organisation</li><li>• Operating Systems</li><li>• Engineering Mathematics III</li><li>• Database Management Systems</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "teal",
                "icon": "auto_awesome",
                "badgeText": "End-Sem Update",
                "title": "CSE & CSE-AIML 2025-29 End-Sem Papers",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added and upgraded 18 End-Sem papers across CSE and CSE-AIML (2025-29 batch).</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">CSE Sem 1 & 2</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Fundamentals of Quantum Physics</li><li>• Digital Electronics and Logic Design</li><li>• Calculus</li><li>• Programming Paradigm and Problem Solving</li><li>• Software Engineering</li><li>• Python Programming</li><li>• Microcontrollers and Sensors</li><li>• Linear Algebra</li><li>• Computer Architecture and Organisation</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">CSE-AIML Sem 1 & 2</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming in C</li><li>• Linear Algebra</li><li>• Digital Electronics and Logic Design</li><li>• Chemistry</li><li>• Statistics for Data Science</li><li>• Self Management I</li><li>• Physics for Computer Engineers</li><li>• Intro to AI and Python Programming</li><li>• Calculus</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "blue",
                "icon": "computer",
                "badgeText": "CST Update",
                "title": "CST 2024-28 Backlog Papers Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added 24 new Backlog question papers across Semesters 1, 2, and 3 for the CST 2024-28 batch.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming and Problem Solving</li><li>• Physics for Computer Engineers (2x)</li><li>• Mathematics - I (3x)</li><li>• Communication Skills (3x)</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 2 & 3</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Statistics and Probability (2x)</li><li>• Programming in C (2x)</li><li>• Mathematics - II (2x)</li><li>• Chemistry (2x)</li><li>• Basic Electrical (2x)</li><li>• Sensors and Microcontrollers</li><li>• Programming Paradigms</li><li>• Discrete Mathematics</li><li>• Data Structures</li><li>• Computer Organisation</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "pink",
                "icon": "psychology",
                "badgeText": "CSE-AIML Update",
                "title": "CSE-AIML 2025-29 Backlog Papers Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added and upgraded 4 Backlog papers for CSE-AIML 2025-29.</p><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming in C</li><li>• Linear Algebra</li><li>• Digital Electronics and Logic Design</li><li>• Chemistry</li></ul></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "indigo",
                "icon": "history",
                "badgeText": "CSE Update",
                "title": "CSE 2025-29 Backlog Papers Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added 1 new paper and upgraded 3 existing Backlog papers for CSE 2025-29.</p><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Programming Paradigm and Problem Solving</li><li>• Fundamentals of Quantum Physics</li><li>• Digital Electronics and Logic Design</li><li>• Calculus</li></ul></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "indigo",
                "icon": "history",
                "badgeText": "CSE Update",
                "title": "CSE 2024-28 Backlog Papers Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added 19 high-quality Backlog question papers for CSE 2024-28.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Mathematics - I (3x)</li><li>• Chemistry (2x)</li><li>• Basic Electrical Engineering (3x)</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 2 & 3</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Statistics and Probability (2x)</li><li>• Programming in C (2x)</li><li>• Mathematics - II (3x)</li><li>• Probability for Data Science</li><li>• Database Concepts</li><li>• Data Structures and Algorithms</li><li>• Principles of Operating Systems</li><li>• Software Engineering</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "red",
                "icon": "delete",
                "badgeText": "Content Removed",
                "title": "Removed Invalid Paper",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Completely removed the <strong>Design and Analysis of Algorithms (T7909)</strong> paper from the AIML 2024-28 Sem 4 End-Sem section as requested.</p>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "green",
                "icon": "library_books",
                "badgeText": "Massive Update",
                "title": "AIML 2024-28 End-Sem Papers Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Added 15 new high-quality End-Sem question papers for AIML 2024-28, spanning across Semesters 1, 2, 3, and 4. Several older papers were also upgraded.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 & 2</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Linear Algebra</li><li>• Intro to AI & Python</li><li>• Chemistry</li><li>• Basic Electrical Engineering</li><li>• Programming in C</li><li>• Statistics for Data Science</li><li>• Physics</li><li>• Communication Skills</li><li>• Calculus</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 3 & 4</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Probability for Data Science</li><li>• Database Concepts</li><li>• Data Structures and Algorithms</li><li>• Unsupervised Learning</li><li>• Supervised Machine Learning</li><li>• Discrete Mathematics</li></ul></div></div>"
            },
            {
                "date": "Sep 14, 2026",
                "color": "green",
                "icon": "link",
                "badgeText": "Content Update",
                "title": "Updated Paper Links",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Corrected the file link for the AIML Sem 3 Backlog paper: <strong>Data Structures and Algorithms</strong> to its proper, high-quality version.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "blue",
                "icon": "rule",
                "badgeText": "CI Pipeline",
                "title": "Improved Duplicate Detection Workflow",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Upgraded the GitHub Actions CI script to intelligently handle duplicate papers. It now allows multiple Backlog attempts (e.g., Nov 2025 vs May 2025) while strictly enforcing replacement for exact-name duplicates to maintain repository quality. Duplicate Drive links are now gracefully handled as warnings.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "green",
                "icon": "sync",
                "badgeText": "Bug Fix",
                "title": "Fixed Stale Download Counts on Homepage",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Resolved an issue where the \"Recently Added\" and \"Trending\" sections on the homepage were displaying stale or 0 download counts due to aggressive browser caching, and fixed a subsequent API bug that caused all counts to temporarily disappear. The stats now sync flawlessly with the live database.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "purple",
                "icon": "format_textdirection_l_to_r",
                "badgeText": "UI Update",
                "title": "Improved Text Wrapping on Paper Cards",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Fixed an issue where extremely long paper names (like Introduction to Artificial Intelligence and Python Programming) were getting cut off. The text on all paper and folder cards across the entire site now properly wraps to multiple lines so you can read the full title.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "blue",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "Massive Backlog Upload (AIML)",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Uploaded a huge batch of Backlog exam papers for the AIML 2024-28 batch across Semesters 1, 2, and 3. All attempts have been clearly labelled for easy studying.</p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\"><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 Backlogs</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Linear Algebra (Nov '25, May '25, Nov '26)</li><li>• Intro to AI &amp; Python (Nov '25, May '25, June '26)</li><li>• Chemistry</li><li>• Basic Electrical Engineering</li></ul></div><div><h4 class=\"text-xs font-bold text-primary mb-2\">Sem 2 &amp; 3 Backlogs</h4><ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\"><li>• Statistics for Data Science (Nov '25, June '26)</li><li>• Calculus (Nov '25, June '26)</li><li>• Physics</li><li>• Programming in C</li><li>• Sem 3: Probability, DBMS, DSA</li></ul></div></div>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "amber",
                "icon": "brush",
                "badgeText": "UI Update",
                "title": "Card Layout & Voting Fixes",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Fixed an issue where older browsers aggressively cached the voting script, causing a false \"already voted\" alert when trying to undo a rating. Additionally, we cleaned up the paper cards by removing the faint separator line above the download statistics for a sleeker look.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "amber",
                "icon": "build",
                "badgeText": "Bug Fixes",
                "title": "Visitor Counter & Newsletter Fixes",
                "bodyHtml": "<ul class=\"list-disc list-inside text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li><strong>24-Hour Visitor Expiry:</strong> Fixed an issue where repeat visits were permanently ignored. The site-wide visitor counter now resets its memory every 24 hours, meaning returning students will be correctly counted once per day.</li><li><strong>Newsletter Improvements:</strong> Fixed a bug in the automated newsletter that prevented the full update details from being included in the email body.</li></ul>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "pink",
                "icon": "undo",
                "badgeText": "New Feature",
                "title": "Interactive Rating System with Undo",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">You can now click your upvote or downvote again to <strong>undo</strong> it! This securely removes your vote from the server while still fundamentally blocking any spam or duplicate voting attempts. The UI now also properly highlights your active vote in green or red.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "blue",
                "icon": "security",
                "badgeText": "Security & Analytics",
                "title": "Smart Trending, Visitor Counter, and Legal Updates",
                "bodyHtml": "<ul class=\"list-disc list-inside text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li><strong>Smart Trending Algorithm:</strong> The Trending Papers section now dynamically sorts the top 6 papers site-wide using a combined score of upvotes, downvotes, and downloads.</li><li><strong>Visitor Counter Restored:</strong> Fully migrated the site-wide visitor counter away from a deprecated public API to our secure Supabase backend.</li><li><strong>TOS & Privacy Policy:</strong> Updated legal documents to explicitly outline our fair use policy and explain our secure IP-based rate-limiting data collection.</li></ul>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "purple",
                "icon": "dashboard_customize",
                "badgeText": "UI Update",
                "title": "Homepage UI Overhaul",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">The 'Trending Papers' and 'Recently Added' sections on the homepage now use the rich paper card layout. They feature colored category badges, report flags, responsive mobile-first grid styling, and real-time community statistics.</p>"
            },
            {
                "date": "Sep 13, 2026",
                "color": "green",
                "icon": "analytics",
                "badgeText": "New Feature",
                "title": "Paper Analytics & Anti-Spam",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Added downloads tracking and an upvote/downvote rating system to all papers. To ensure data integrity, strict IP-based rate limiting and one-vote-per-paper restrictions have been implemented via secure Edge Functions.</p>"
            },
            {
                "date": "Sep 12, 2026",
                "color": "indigo",
                "icon": "mark_email_unread",
                "badgeText": "New Feature",
                "title": "Weekly Newsletter Subscription Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">You can now subscribe to get a single weekly email summarizing all new site updates, bug fixes, and uploaded question papers. Subscribe directly from the homepage! Every Sunday, you will receive a digest of everything that changed during the week.</p>"
            },
            {
                "date": "Sep 07, 2026",
                "color": "blue",
                "icon": "delete",
                "badgeText": "Site Update",
                "title": "Missing Page Removed",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">We have completely removed the <strong>What's Missing</strong> page. A huge thanks to the examination department for giving us access to all end-semester papers across all branches and semesters!</p>"
            }
        ]
    },
    {
        "month": "August 2026",
        "subtitle": "Previous updates",
        "entries": [
            {
                "date": "Aug 09, 2026",
                "color": "green",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "6 New Question Papers Uploaded",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added new End-Sem and Mid-Sem papers for AIML 2024-28.\n                                </p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        AIML 2024-28 Sem 1 End-Sem: Linear Algebra, Introduction to AI &amp; Python Programming, Chemistry, Basic Electrical and Electronics Engineering\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        AIML 2024-28 Sem 4 End-Sem: Supervised Machine Learning\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">quiz</span>\n                                        AIML 2024-28 Sem 4 Mid-Sem: Design and Analysis of Algorithms\n                                    </li>\n</ul>"
            }
        ]
    },
    {
        "month": "July 2026",
        "subtitle": "Previous updates",
        "entries": [
            {
                "date": "Jul 30, 2026",
                "color": "purple",
                "icon": "badge",
                "badgeText": "Contributors",
                "title": "1 More Contributor Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">24070722005 &middot; AIML &middot; 2024-28 - thank you!</p>"
            },
            {
                "date": "Jul 30, 2026",
                "color": "green",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "11 New Question Papers Uploaded",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added new Backlog and End-Sem papers across CSE, CST, and AIML branches.\n                                </p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">history</span>\n                                        CST & CSE 2024-28 Sem 3 Backlog: Discrete Mathematics, Programming Paradigms, Data Structures, Sensors and Microcontrollers\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">history</span>\n                                        CST & CSE 2024-28 Sem 2 Backlog: Statistics and Probability\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        AIML 2024-28 Sem 4 End-Sem: Design and Analysis of Algorithms, Unsupervised Learning\n                                    </li>\n</ul>"
            },
            {
                "date": "Jul 21, 2026",
                "color": "green",
                "icon": "school",
                "badgeText": "Polish",
                "title": "Favicon Added, Scroll-Reveal Audited Site-Wide",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Small polish pass after yesterday's mobile bug hunt.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">school</span>Added a favicon (browser tab icon) - the site never had one</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">verified</span>Audited every page for the same growing-list scroll-reveal pattern that broke July's changelog section - the three spots that were actually at risk (changelog months, What's Missing branch groups, Contributors cards) were already fixed; everything else is fixed-size content, and the site-wide threshold fix from yesterday now protects all of it regardless</li></ul>"
            },
            {
                "date": "Jul 21, 2026",
                "color": "red",
                "icon": "bug_report",
                "badgeText": "Bug Fix",
                "title": "Actual Fix: July Section Invisible on Real Mobile Chrome",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Confirmed via testing on multiple real Android/Chrome devices (not reproducible in desktop or simulated-mobile testing) that switching to \"Desktop site\" mode fixed it - pointing at a scroll-reveal animation, not a data or network issue.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">bug_report</span>Each month's whole block still faded in via scroll-reveal, gated on 10% of its own height being visible at once. July's block has grown tall enough (many entries) that 10% of it may never be visible in one screenful on a phone, especially since it's the first thing on the page with no scroll to trigger a recalculation - so it could stay stuck invisible. Shorter blocks (June, January) crossed that threshold reliably, which is why only July was ever affected</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">construction</span>Removed the scroll-reveal from month blocks entirely, and lowered the site-wide reveal threshold from 10% to \"any pixel visible\" so this can't recur for any element that grows tall over time (also applied to What's Missing's per-branch groups, which had the same pattern)</li></ul>"
            },
            {
                "date": "Jul 21, 2026",
                "color": "blue",
                "icon": "hourglass_top",
                "badgeText": "Bug Fix",
                "title": "Real Root Cause: Blank Content Was a Slow-Connection Loading Gap, Not a Bug",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Follow-up after the previous fix didn't actually resolve what was being seen on a real phone. Turned out the page itself was fine - on a slow connection, scrolling down before the changelog data (and its supporting CSS/JS) finished downloading meant the timeline briefly showed nothing at all, which looked like missing entries rather than a page still loading.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">progress_activity</span>Changelog, What's Missing, and Contributors now show a spinner with \"Loading...\" instead of a blank area while their data loads, so a slow connection reads as \"still loading\" instead of \"broken\"</li></ul>"
            },
            {
                "date": "Jul 21, 2026",
                "color": "amber",
                "icon": "smartphone",
                "badgeText": "Bug Fix",
                "title": "Fixed Changelog Entries Not Fully Showing on Mobile",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">Every changelog entry had a scroll-reveal fade-in with a staggered delay based on its position in the list. With July alone now at 28 entries, that delay stacked up to several seconds for the entries furthest down - on a quick mobile scroll, later entries could still be mid-fade (or not yet triggered) and looked like they were missing entirely. Removed the per-entry animation so all entries render immediately visible regardless of list length. Applied the same fix to the Contributors page for the same reason - it grows the same way.</p>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "purple",
                "icon": "badge",
                "badgeText": "Contributors",
                "title": "1 More Contributor Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">25070725015 &middot; CSE AIML &middot; 2025-29 - thank you!</p>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "purple",
                "icon": "badge",
                "badgeText": "Contributors",
                "title": "3 More Contributors Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Thanks to three more students for sending in papers. Contributors are listed in the order they were added, oldest first.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">badge</span>24070724005 &middot; CST &middot; 2024-28</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">badge</span>24070724019 &middot; CST &middot; 2024-28</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">badge</span>25070721055 &middot; CSE &middot; 2025-29</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "purple",
                "icon": "volunteer_activism",
                "badgeText": "New Page",
                "title": "Contributors Page Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">New <a href=\"contributors.html\" class=\"font-medium text-primary hover:underline\">Contributors</a> page recognizing students who've sent in question papers, listed by roll number plus branch and batch (not full name, to keep things privacy-conscious since papers are usually shared informally rather than through a form that asks permission to publish a name). Linked in the nav on every page. Starts empty and gets filled in manually as contributors are identified.</p>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "blue",
                "icon": "expand_more",
                "badgeText": "UI",
                "title": "Nav Cleaned Up with a \"More\" Menu",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">With Missing and Contributors added, the top nav had grown to 11 items and was getting tight on smaller desktop screens. Collaborate, About Us, FAQ, Docs, and Feedback are now grouped under a \"More\" dropdown, leaving Home, Browse Papers, Submit Papers, Missing, Contributors, and Changelog directly visible. Mobile menu keeps everything visible as a flat list with a \"More\" divider, since a dropdown-inside-a-dropdown isn't worth the extra tap there.</p>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "green",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "2 More Papers Added to CSE AIML 2025-29 Sem 2",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">CSE AIML 2025-29 Sem 2 End-Sem now has 5 papers.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>Self Management I</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>Physics for Computer Engineers</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "amber",
                "icon": "smartphone",
                "badgeText": "Bug Fix",
                "title": "Mobile: \"Browse All\" Link and Preview Button on Recently Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Two gaps in the homepage's Recently Added section, reported from mobile testing.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">visibility_off</span>The \"Browse all\" link next to the Recently Added heading was hidden on mobile by mistake - it's now visible on every screen size</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">visibility</span>Recently Added cards were missing the Preview button that Browse Papers cards have - added the same preview modal here too, so you can glance at a paper straight from the homepage</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "green",
                "icon": "menu_book",
                "badgeText": "Docs Update",
                "title": "Docs Updated for New Features, Layout Fixes",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Housekeeping pass after today's feature additions.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">menu_book</span>Docs page now covers shareable Browse links, the Preview button, Download Entire Semester, and has a new \"What's Missing\" section; also fixed a stale branch list that was missing AIML</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">space_bar</span>Fixed excessive spacing between the homepage's Recently Added section and How It Works below it</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">smartphone</span>Fixed a mobile layout bug in the PDF preview modal where a long paper title could push the Download/Close buttons off-screen</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "blue",
                "icon": "visibility",
                "badgeText": "New Feature",
                "title": "PDF Preview, Recently Added Widget, and Whole-Semester Downloads",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">A round of quality-of-life features for actually finding and using papers.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">visibility</span>Every paper card on Browse now has a Preview button that opens the PDF in an on-page modal, so you can glance at it without leaving the site. Download still works exactly as before</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">folder_zip</span>Semesters whose papers live together in one Drive folder now show a \"Download Entire Semester\" button that opens that folder directly, so Drive's own zip-download can grab everything at once (rolling out per-semester as folders are made public)</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">new_releases</span>Homepage now has a Recently Added section showing the latest papers uploaded, pulled straight from the data</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">rule</span>Added an automated duplicate-entry check (alongside the existing link checker) that catches the same paper or Drive link accidentally listed twice before it ships</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "purple",
                "icon": "checklist",
                "badgeText": "Refinement",
                "title": "\"What's Missing\" Curated to Real Gaps, Added to Every Page's Nav",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">Follow-up on the What's Missing page from earlier today, based on actual known gaps rather than a blind scan of empty folders.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">checklist</span>The page previously auto-flagged every empty folder in the data, including future semesters nobody has reached yet and Mid-Sem categories nobody tracks. It's now a hand-curated list of exactly 22 categories that genuinely still need papers — including a few that are partially filled, not just fully empty</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">menu</span>Added the Missing link to the navigation on every page (not just Browse), desktop and mobile</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">smartphone</span>Verified the mobile menu still opens/closes correctly on every page after the nav change</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "green",
                "icon": "travel_explore",
                "badgeText": "New Feature",
                "title": "Shareable Browse Links, \"What's Missing\" Page, and Search Visibility",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">More improvements aimed directly at making it easier to find papers and know what still needs uploading.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">link</span>Browse Papers now syncs your current folder to the URL, so links can be shared or bookmarked directly to a specific institute/branch/batch/semester/category, and refreshing the page no longer resets you to the top</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">travel_explore</span>New What's Missing page lists every subject/semester/category that still has zero papers, with a one-click button to submit the one you have</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">manage_search</span>Added a sitemap, robots.txt, canonical URLs, and social preview (Open Graph/Twitter) tags across every page so the archive is easier to find via search and looks right when shared as a link</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">rule</span>Removed \"Internals\" and \"Supplementary\" from the Submit page's exam type options — they weren't real categories anywhere on the site, so picking them had nowhere to go; \"Backlog\" covers the same case</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "blue",
                "icon": "auto_fix_high",
                "badgeText": "Enhancement",
                "title": "Empty Categories Now Prompt Uploads, Submit Form Fixed, Link Monitoring Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">A round of site improvements focused on closing gaps in the browse and submit flow, plus new automation to keep links healthy.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">upload_file</span>Empty semester/category folders on Browse now show a \"Submit a Paper\" button that deep-links to the submit form with institute, branch, batch, semester, and type pre-filled</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">bug_report</span>Fixed the Submit page: added the missing \"Backlog\" exam type and \"AIML\" branch options, which existed in the archive but couldn't be selected when submitting a new paper</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">link</span>Added an automated weekly check (plus on every papers update) that verifies every paper's Google Drive link is still live, opening an issue if any break</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">data_object</span>This changelog is now generated from a single data file instead of hand-written HTML, so future entries are far less error-prone</li></ul>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "amber",
                "icon": "update",
                "badgeText": "Announcement",
                "title": "Hero Badge Updated: 2026 Papers Are Here",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    The status badge on the homepage and About page now reads\n                                    <span class=\"font-medium text-text-light dark:text-text-dark\">\"Now with 2026\n                                        papers\"</span>, replacing the earlier \"Updating with 2026 papers soon\"\n                                    message, since 2026 papers have started being uploaded.\n                                </p>"
            },
            {
                "date": "Jul 20, 2026",
                "color": "green",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "19 New Question Papers Uploaded",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added new End-Sem and Backlog papers across CSE, CSE AIML, and CST branches,\n                                    spanning multiple semesters and batches.\n                                </p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">history</span>\n                                        CSE 2025-29 Sem 1 Backlog: Fundamentals of Quantum Physics, Digital\n                                        Electronics and Logic Design, Calculus\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        CSE 2025-29 Sem 2 End-Sem: CAO, Linear Algebra, Microcontrollers and Sensors,\n                                        Python Programming, Software Engineering\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        CSE 2024-28 Sem 4 End-Sem: Operating Systems, Engineering Mathematics-III,\n                                        Database Management Systems\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        CST 2024-28 Sem 4 End-Sem: Operating Systems, Engineering Mathematics-III,\n                                        Database Management Systems\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        CSE AIML 2025-29 Sem 2 End-Sem: Statistics for Data Science, Introduction to\n                                        AI and Python Programming, Calculus\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">history</span>\n                                        CSE AIML 2025-29 Sem 1 Backlog: Digital Electronics and Logic Design,\n                                        Chemistry\n                                    </li>\n</ul>"
            },
            {
                "date": "Jul 11, 2026",
                "color": "purple",
                "icon": "account_tree",
                "badgeText": "Structure Update",
                "title": "Full 8-Semester Structure & Backlog Category Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Every existing batch across CSE, CSE AIML, AIML, and CST now has all 8 semesters\n                                    scaffolded, and every semester includes an <span class=\"font-medium text-text-light dark:text-text-dark\">End-Sem</span>, <span class=\"font-medium text-text-light dark:text-text-dark\">Mid-Sem (Unit\n                                        Tests)</span>, and new <span class=\"font-medium text-text-light dark:text-text-dark\">Backlog</span>\n                                    category. Empty categories are ready and will be filled in as more papers are\n                                    uploaded.\n                                </p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">folder</span>\n                                        CSE (2024-28, 2025-29), CSE AIML (2025-29), AIML (2024-28), CST (2024-28) →\n                                        Sem 1-8\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">history</span>\n                                        Backlog category added alongside End-Sem and Mid-Sem in every semester\n                                    </li>\n</ul>"
            }
        ]
    },
    {
        "month": "June 2026",
        "subtitle": "Latest updates",
        "entries": [
            {
                "date": "Jun 7, 2026",
                "color": "orange",
                "icon": "space_bar",
                "badgeText": "Bug Fix",
                "title": "Nav Spacing Fixed — Theme Toggle Gap Corrected",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Fixed excessive gap between the last nav link (\"Feedback\") and the theme toggle\n                                    button. Restored the original <code class=\"text-xs bg-bg-light-tertiary dark:bg-bg-dark-tertiary px-1 rounded\">justify-between</code>\n                                    layout on the outer nav container and reverted the desktop nav to <code class=\"text-xs bg-bg-light-tertiary dark:bg-bg-dark-tertiary px-1 rounded\">gap-8</code>\n                                    spacing, matching the original design. Also fixed correct nav link order across all 11 pages.\n                                </p>"
            },
            {
                "date": "Jun 7, 2026",
                "color": "blue",
                "icon": "phone_iphone",
                "badgeText": "Bug Fix",
                "title": "Mobile Layout & Performance Fixes",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Fixed two <a class=\"text-primary hover:underline font-medium\" href=\"docs.html\">Docs\n                                        page</a> mobile issues: (1) Nav was missing\n                                    <code class=\"text-xs bg-bg-light-tertiary dark:bg-bg-dark-tertiary px-1 rounded\">hidden md:flex</code>\n                                    so all desktop links showed on mobile causing horizontal overflow — rebuilt the nav\n                                    with proper responsive structure and logo. (2) The\n                                    <code class=\"text-xs bg-bg-light-tertiary dark:bg-bg-dark-tertiary px-1 rounded\">pre</code>\n                                    folder-tree code block was pushing the flex layout wider than the viewport — fixed\n                                    by adding\n                                    <code class=\"text-xs bg-bg-light-tertiary dark:bg-bg-dark-tertiary px-1 rounded\">min-w-0</code>\n                                    to the main flex item so code blocks scroll horizontally instead of expanding the\n                                    page. Also disabled heavy GPU animations (blur orbs, dot grid) on mobile to fix\n                                    homepage scroll lag.\n                                </p>"
            },
            {
                "date": "Jun 7, 2026",
                "color": "purple",
                "icon": "animation",
                "badgeText": "Enhancement",
                "title": "Rich Animations Added Site-Wide",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Added a full suite of animations inspired by Linear, Vercel, and Stripe — ambient\n                                    cursor glow, animated scroll progress bar, card spotlight (mouse-tracking inner glow),\n                                    smooth page transitions, staggered folder card reveals on Browse, floating gradient\n                                    orbs in the hero, button shimmer streaks, an animated live-status dot in the footer,\n                                    and auto scroll-reveal on sections across all 11 pages.\n                                </p>"
            },
            {
                "date": "Jun 7, 2026",
                "color": "green",
                "icon": "group_add",
                "badgeText": "New Feature",
                "title": "Collaborate Page Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Added a new <a class=\"text-primary hover:underline font-medium\" href=\"collaborate.html\">Collaborate page</a> for\n                                    students and developers who want to contribute to SIT Archive on GitHub. Includes a\n                                    full step-by-step guide (fork, clone, branch, edit, commit, PR, review), code\n                                    blocks, tips for smooth contributions, and a direct link to the repository. Added to\n                                    the nav and footer across all pages.\n                                </p>"
            },
            {
                "date": "Jun 7, 2026",
                "color": "green",
                "icon": "rate_review",
                "badgeText": "New Feature",
                "title": "Feedback Page Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Students can now submit feedback, report bugs, request missing papers, or share\n                                    suggestions directly via the new <a class=\"text-primary hover:underline font-medium\" href=\"feedback.html\">Feedback page</a>. The form\n                                    opens your email client with everything pre-filled — just hit send. Added to the nav\n                                    and footer across all pages.\n                                </p>"
            },
            {
                "date": "Jun 6, 2026",
                "color": "green",
                "icon": "people",
                "badgeText": "New Feature",
                "title": "Visitor Counter Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Added a live visitor counter bar at the top of all pages. The counter tracks unique\n                                    session-based visits and is displayed site-wide with the matching theme.\n                                </p>"
            },
            {
                "date": "Jun 6, 2026",
                "color": "amber",
                "icon": "update",
                "badgeText": "Announcement",
                "title": "2026 Papers Coming Soon",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Updated the status badge across all pages to reflect that 2026 exam papers are\n                                    currently being collected and will be uploaded soon. The hero badge now reads\n                                    \"Updating with 2026 papers soon\".\n                                </p>"
            }
        ]
    },
    {
        "month": "January 2026",
        "subtitle": "Recent updates",
        "entries": [
            {
                "date": "Jan 26, 2026",
                "color": "blue",
                "icon": "library_add",
                "badgeText": "Mass Update",
                "title": "Comprehensive Paper Addition",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added 16+ new papers and updated links for CST, CSE, and AIML branches (2024-28\n                                    Batch).\n                                </p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\">\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 (Mid &amp; End)</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Mathematics-I (Mid/End)</li>\n<li>• Programming &amp; Problem Solving</li>\n<li>• Critical Thinking</li>\n<li>• Basic Electrical Engineering</li>\n</ul>\n</div>\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 2 (Mid &amp; End)</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Programming in C (End)</li>\n<li>• Basic Electrical Engineering (Mid)</li>\n</ul>\n</div>\n</div>"
            },
            {
                "date": "Jan 26, 2026",
                "color": "red",
                "icon": "cleaning_services",
                "badgeText": "Cleanup",
                "title": "Removed Placeholder Entries",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Removed 3 CST Sem 1 entries that had no links available yet (Programming &amp; Problem\n                                    Solving End-Sem, Basic Electrical End-Sem &amp; Mid-Sem).\n                                </p>"
            },
            {
                "date": "Jan 26, 2026",
                "color": "green",
                "icon": "add",
                "badgeText": "New Branch",
                "title": "AIML Branch Added",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added new AIML branch under SIT Hyderabad with 2024-28 batch.\n                                </p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">folder</span>\n                                        AIML → 2024-28 → Sem 1, 2, 3, 4\n                                    </li>\n<li class=\"flex items-center gap-2\">\n<span class=\"material-symbols-outlined text-[14px] text-primary\">description</span>\n                                        Sem 2 End-Sem: Programming in C\n                                    </li>\n</ul>"
            },
            {
                "date": "Jan 26, 2026",
                "color": "blue",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "CST 2024-28 Sem 1 & 2 Papers",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added multiple papers for CST branch Semester 1 and 2.\n                                </p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\">\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 End-Sem</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Mathematics-I</li>\n<li>• Programming and Problem Solving</li>\n<li>• Basic Electrical and Electronics Engineering</li>\n</ul>\n</div>\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 1 Mid-Sem</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Basic Electrical and Electronics Engineering</li>\n<li>• Critical Thinking</li>\n<li>• Programming and Problem Solving</li>\n<li>• Mathematics-I</li>\n</ul>\n</div>\n</div>"
            },
            {
                "date": "Jan 25, 2026",
                "color": "blue",
                "icon": "upload_file",
                "badgeText": "Papers Added",
                "title": "CSE 2024-28 Sem 2 & 3 Papers",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">\n                                    Added papers for CSE branch Semester 2 and 3.\n                                </p><div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children\">\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 2 End-Sem</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Programming in C</li>\n</ul>\n</div>\n<div>\n<h4 class=\"text-xs font-bold text-primary mb-2\">Sem 3 End-Sem</h4>\n<ul class=\"text-xs text-text-light-muted dark:text-text-dark-muted space-y-1\">\n<li>• Sensors and Microcontrollers</li>\n<li>• Programming Paradigms</li>\n<li>• Discrete Mathematics</li>\n<li>• Data Structures</li>\n<li>• Computer Organization</li>\n</ul>\n</div>\n</div>"
            },
            {
                "date": "Jan 25, 2026",
                "color": "purple",
                "icon": "edit",
                "badgeText": "Link Updated",
                "title": "Discrete Mathematics Links Fixed",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Updated Google Drive links for \"Discrete Mathematics and Graph Theory\" in CSE and\n                                    CST branches (Sem 3 End-Sem).\n                                </p>"
            },
            {
                "date": "Jan 24, 2026",
                "color": "amber",
                "icon": "palette",
                "badgeText": "UI Update",
                "title": "Default Theme Changed to Light",
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted\">\n                                    Changed the default theme from dark to light mode. Dark mode is still available via\n                                    the toggle.\n                                </p>"
            }
        ]
    }
];