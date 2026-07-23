import io, sys, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def fix(f):
    lines = open(f, encoding='utf-8').read().split('\n')
    out = []
    n = len(lines)
    for i, line in enumerate(lines):
        out.append(line)
        # determine if this line is a property value line (ends with " or } or ] or digit)
        stripped = line.rstrip()
        if not stripped.endswith('"') and not stripped.endswith(']') and not stripped.endswith('}'):
            continue
        if stripped.endswith(','):  # already has comma
            continue
        # next non-identical meaningful line
        nxt = lines[i+1] if i+1 < n else ''
        ns = nxt.rstrip()
        # if next line starts a sibling key (same indent '"key"') -> need comma
        m = re.match(r'^(\s*)"', nxt)
        if m and not ns.startswith(line[:len(line)-len(line.lstrip())] + '}'):
            # sibling key at same or lesser indent that is a key (starts with optional spaces + quote)
            # only add comma if next line is a key at same indent and this line is a value (ends with ")
            if stripped.endswith('"') and re.match(r'^\s+"', nxt):
                out[-1] = line.rstrip() + ','
    open(f, 'w', encoding='utf-8').write('\n'.join(out))
    # verify
    import json
    try:
        json.load(open(f, encoding='utf-8'))
        print('FIXED OK', f)
    except Exception as e:
        print('STILL ERR', f, str(e), 'at', repr(open(f,encoding='utf-8').read()[max(0,e.pos-40):e.pos+10]))

for f in ['src/i18n/zh.json', 'src/i18n/km.json']:
    fix(f)
