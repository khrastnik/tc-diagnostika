# Toplolog

Toplolog – informativna slovenska stran o toplotnih črpalkah: kako delujejo, zakaj se kvarijo in kaj je aktualno.

- Ogrodje: [Astro](https://astro.build) (statična stran), vsebina v Markdownu
- Gostovanje: GitHub Pages, objava ob vsakem `git push` na `main`
- Spletni naslov: https://khrastnik.github.io/tc-diagnostika/

## Lokalno

```bash
npm install
npm run dev
```

## Nov članek

Dodaj datoteko v `src/content/clanki/<slug>.md` s frontmatterjem:

```yaml
title: "Naslov z iskano frazo"
description: "Opis do 160 znakov"
section: kako-deluje   # ali vzdrzevanje, zakaj-se-kvarijo, aktualno
pubDate: 2026-12-01
updated: 2026-12-01
remember: ["Kaj to pomeni za vas ..."]
sources: [{ name: "Eko sklad", url: "https://www.ekosklad.si" }]   # obvezno za Aktualno
related: [drug-slug]
terms: [hladivo]
```

Pojmi slovarja so v `src/content/slovar/`.

## Lastna domena

Ko bo domena kupljena: dodaj `public/CNAME` z domeno, v `astro.config.mjs` nastavi `site` na domeno in `base` na `/`, nato domeno vpiši v Settings → Pages.

## Pravila vsebine

Brez navodil za posege v hladilni krog in brez ponudbe storitev servisa, dokler ni pridobljeno pooblastilo MOP in spričevalo za F-pline.
