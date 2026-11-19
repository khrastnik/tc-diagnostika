# Instagram

Reels in objave za Instagram profil. Ta mapa se ne objavi na spletni strani.

- `reel-*.html` – animacija za Reel (1080 × 1920), CSS animacije s skupnim trajanjem v `--T`.
- `reel-*.mp4` – izdelan video.
- `reel-*.srt` – podnapisi (za TikTok, YouTube Shorts, Facebook; v videu so že vžgani).
- `reel-*-opis.txt` – opis, ključniki in namigi za objavo.
- `render-reel.cjs` – upodabljalnik: animacijo zajame sličico za sličico.
- `reel-lib.js` – časovnica v sekundah (prizori, stagger, pop, shake, count, loop).
- `reel-predloga.html` – predloga za nov Reel.

Pravila in postopek: `.claude/skills/toplolog-reels/SKILL.md`.

Izdelava videa (iz korena repozitorija):

```bash
mkdir -p /tmp/frames && node instagram/render-reel.cjs "$PWD/instagram/reel-odtaljevanje.html" /tmp/frames 30 21
ffmpeg -framerate 30 -i /tmp/frames/f%04d.jpg -f lavfi -t 21 -i anullsrc=r=48000:cl=stereo -c:v libx264 -pix_fmt yuv420p -crf 20 -c:a aac -shortest -movflags +faststart instagram/reel-odtaljevanje.mp4
```
