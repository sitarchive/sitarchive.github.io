/* =====================================================
   SIT ARCHIVE - CHANGELOG DATA
   Add new entries to the top of the relevant month's
   `entries` array (or add a new month block at the top).
   ===================================================== */

const CHANGELOG_DATA = [
    {
        "month": "July 2026",
        "subtitle": "Latest updates",
        "entries": [
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
                "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">More improvements aimed directly at making it easier to find papers and know what still needs uploading.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-1\"><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">link</span>Browse Papers now syncs your current folder to the URL, so links can be shared or bookmarked directly to a specific institute/branch/batch/semester/category, and refreshing the page no longer resets you to the top</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">travel_explore</span>New <a href=\"missing.html\" class=\"font-medium text-primary hover:underline\">What's Missing</a> page lists every subject/semester/category that still has zero papers, with a one-click button to submit the one you have</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">manage_search</span>Added a sitemap, robots.txt, canonical URLs, and social preview (Open Graph/Twitter) tags across every page so the archive is easier to find via search and looks right when shared as a link</li><li class=\"flex items-center gap-2\"><span class=\"material-symbols-outlined text-[14px] text-primary\">rule</span>Removed \"Internals\" and \"Supplementary\" from the Submit page's exam type options — they weren't real categories anywhere on the site, so picking them had nowhere to go; \"Backlog\" covers the same case</li></ul>"
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
