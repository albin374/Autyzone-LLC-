import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # replace navigation and footer links
    # <a href="index.html#about">About Us</a> -> <a href="about.html">About Us</a>
    content = re.sub(r'href="index\.html#about"', 'href="about.html"', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file}")
