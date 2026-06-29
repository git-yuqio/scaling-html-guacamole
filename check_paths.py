import re, os
for f in ['src/components/Gallery.jsx', 'src/components/Journal.jsx']:
    data = open(os.path.join(os.path.dirname(__file__) or '.', f), 'rb').read()
    urls = re.findall(rb"(?:url|image): '([^']+)'", data)
    print(f + ':')
    for u in urls:
        print('  ' + u.decode('utf-8', errors='replace'))
