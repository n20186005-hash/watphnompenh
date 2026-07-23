import io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
for f in ['src/i18n/zh.json', 'src/i18n/km.json', 'src/i18n/en.json']:
    lines = open(f, encoding='utf-8').read().split('\n')
    for i, line in enumerate(lines):
        if 'disclaimer' in line:
            print(f, 'line', i+1, 'last3=', repr(line[-3:]), 'hex=', line[-2:].encode('utf-8').hex())
        if '"legal":' in line:
            print(f, 'legal line', i+1, 'prev line last3=', repr(lines[i-1][-3:]))
