import re, glob
for f in glob.glob('src/components/Gallery.jsx'):
    with open(f, 'rb') as fh:
        data = fh.read()
    urls = re.findall(rb'https?://[^"\'\\s]+', data)
    for u in urls:
        print(f.decode(), u.decode('utf-8', errors='replace'))
    print("---")
