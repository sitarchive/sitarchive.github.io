import re

with open('js/changelog-data.js', 'r') as f:
    content = f.read()

# The duplicates start with:
#             {
#                 "date": "Sep 29, 2026",
#                 "color": "green",

# Let's extract the exact duplicate block from August and remove it globally except in September.
# The August block is where the first duplicate appears.

# Alternatively, since we know they are in specific months, let's use a regex that matches those specific entries 
# when they appear inside other month blocks. But simpler: just find all occurrences of the Sep 29/Sep 28 block and keep only the first one.

# Let's just remove the block manually by replacing the exact string.

# Wait, let's load it as JSON.
import json
json_str = content[content.find('['):].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

for month_block in data:
    if month_block['month'] != 'September 2026':
        # Remove any entries with Sep dates
        month_block['entries'] = [e for e in month_block['entries'] if not e['date'].startswith('Sep ')]
        
# Also add the new entry for today
data[0]['entries'].insert(0, {
    "date": "Oct 02, 2026",
    "color": "blue",
    "icon": "speed",
    "badgeText": "Performance & Polish",
    "title": "Codebase Audit & UI Enhancements",
    "bodyHtml": "<p class=\"text-sm text-text-light-muted dark:text-text-dark-muted mb-3\">We completed a full codebase audit and implemented several optimizations to improve the user experience.</p><ul class=\"text-sm text-text-light-muted dark:text-text-dark-muted space-y-2\"><li><strong>Eliminated Theme Flash:</strong> Fixed an issue where the site would briefly flash white before loading the dark theme. Dark mode now applies instantly.</li><li><strong>Smoother Animations:</strong> Enabled rich UI animations (tilt cards, magnetic buttons) across the site while respecting system 'prefers-reduced-motion' settings.</li><li><strong>Memory Optimization:</strong> Fixed a background event listener leak in the navigation menu to improve long-term browser performance.</li><li><strong>Data Consistency:</strong> Corrected subject naming (Computer Organization) for better search accuracy and cleaned up changelog history.</li></ul>"
})

new_content = "const CHANGELOG_DATA = " + json.dumps(data, indent=4) + ";\n"

with open('js/changelog-data.js', 'w') as f:
    f.write(new_content)

print("Changelog fixed.")
