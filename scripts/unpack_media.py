from pathlib import Path
import hashlib
import zipfile

ZIP = Path("site-media.zip")
EXPECTED = "a3b48ae8ec5b1feb53102c74cd6d849850bda4161d8fb993db47ab36ec9128fc"
STEMS = ("nbs-depth", "nbs-multiview", "nbs-evaluation",
         "vla-task", "vla-pipeline", "vla-evaluation")
ALLOWED = {f"public/media/{stem}-{lang}.webp" for stem in STEMS for lang in ("zh","en")}
ALLOWED |= {"public/media/nbs-turntable.mp4", "public/media/vla-rollout.mp4"}
if not ZIP.is_file():
    print("No site-media.zip: building without optional media.")
else:
    actual = hashlib.sha256(ZIP.read_bytes()).hexdigest()
    if actual != EXPECTED:
        raise SystemExit("site-media.zip did not match the reviewed SHA256. Refusing publication.")
    with zipfile.ZipFile(ZIP) as archive:
        paths = {i.filename for i in archive.infolist() if not i.is_dir() and i.filename.startswith("public/")}
        if paths != ALLOWED:
            raise SystemExit(f"Unexpected or missing media files: {sorted(paths.symmetric_difference(ALLOWED))}")
        for name in sorted(ALLOWED):
            info = archive.getinfo(name)
            if info.file_size > 8_000_000:
                raise SystemExit("Media asset exceeds the allowed limit: " + name)
            data = archive.read(info)
            dest = Path(name)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
            print("Verified media:", name, len(data))
