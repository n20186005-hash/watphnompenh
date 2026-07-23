import urllib.request, os

base = "https://loremflickr.com/1200/800"
queries = [
    ("phnompenh,temple", 11),
    ("phnompenh", 21),
    ("cambodia,buddhist", 31),
    ("phnompenh", 41),
    ("cambodia,temple", 51),
    ("phnompenh,architecture", 61),
    ("phnompenh,city", 71),
    ("cambodia,monk", 81),
    ("phnompenh,tree", 91),
    ("cambodia,carving", 101),
    ("phnompenh,river", 111),
    ("phnompenh,sunset", 121),
]

os.makedirs("public/gallery", exist_ok=True)
for i, (tag, lock) in enumerate(queries, start=1):
    url = f"{base}/{tag}?lock={lock}"
    out = f"public/gallery/wat-phnom-daun-penh-{i}.jpg"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=40) as r, open(out, "wb") as f:
            data = r.read()
            f.write(data)
        print(f"OK {out} {len(data)} bytes")
    except Exception as e:
        print(f"FAIL {out} {e}")
