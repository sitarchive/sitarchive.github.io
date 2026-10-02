import os
import re
from bs4 import BeautifulSoup

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
html_files += [os.path.join(dp, f) for dp, dn, filenames in os.walk('.') for f in filenames if f.endswith('.html') and dp != '.']
html_files = list(set(html_files)) # unique

# We only care about specific files requested:
target_files = ["index.html", "browse.html", "about.html", "faq.html", "docs.html", "feedback.html", "submit.html", "collaborate.html", "contributors.html", "changelog.html", "privacy.html", "unsubscribe.html"]

for f in target_files:
    if not os.path.exists(f):
        print(f"Missing file: {f}")
        continue
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
    soup = BeautifulSoup(content, 'html.parser')
    
    print(f"\n--- Auditing {f} ---")
    
    # SEO
    if not soup.find('title'):
        print("- Missing <title> tag")
    if not soup.find('meta', attrs={'name': 'description'}):
        print("- Missing <meta name=\"description\">")
    if not soup.find('meta', attrs={'property': 'og:title'}):
        print("- Missing Open Graph og:title")
    if not soup.find('link', attrs={'rel': 'canonical'}):
        print("- Missing <link rel=\"canonical\">")
    
    # Accessibility - Alt tags
    images = soup.find_all('img')
    for img in images:
        if not img.get('alt') and img.get('alt') != '':
            print(f"- Image missing alt attribute: {img.get('src', 'unknown source')} at line {img.sourceline if hasattr(img, 'sourceline') else '?'}")
            
    # Links
    links = soup.find_all('a')
    for a in links:
        href = a.get('href')
        if not href or href.strip() == '':
            print(f"- Empty href in <a> tag: {a.text.strip()[:20]}")
        elif href.startswith('#') and len(href) > 1:
            # check if target exists
            target_id = href[1:]
            if not soup.find(id=target_id):
                print(f"- Broken hash link: {href}")
                
    # Script loading
    head_scripts = soup.head.find_all('script') if soup.head else []
    for s in head_scripts:
        if s.get('src') and not (s.has_attr('defer') or s.has_attr('async')):
            print(f"- Blocking script in <head>: {s.get('src')}")
            
    # Duplicate IDs
    ids = []
    for tag in soup.find_all(id=True):
        ids.append(tag['id'])
    
    from collections import Counter
    dups = [item for item, count in Counter(ids).items() if count > 1]
    if dups:
        print(f"- Duplicate IDs found: {', '.join(dups)}")

