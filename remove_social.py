import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'contact.html']

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use regex to find and remove the entire social-links div in the footer
    # It starts with <div class="social-links" and ends with </div> right after the </a>
    pattern = r'<div class="social-links"[^>]*>.*?</a>\s*</div>'
    
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file}")
