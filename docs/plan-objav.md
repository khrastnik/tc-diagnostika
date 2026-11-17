# Plan objav

Samodejna objava: vsak ponedeljek en članek + 2 pojma v slovarju.
Postopek in pravila: glej razdelek »Pravila za samodejno objavo« spodaj.
Ko je članek objavljen, se vrstica odkljuka (`[x]`) in doda datum ter slug.

## Vrstni red

- [ ] 1. Zakaj se kvarijo — Zakaj se toplotna črpalka pogosto vklaplja in izklaplja (taktiranje) — pojmi: taktiranje, inverter
- [ ] 2. Zakaj se kvarijo — Hrup toplotne črpalke: kdaj je normalen in kdaj ne — pojmi: štiripotni ventil, ventilator zunanje enote
- [ ] 3. Kako deluje — Krivulja ogrevanja: kako jo nastaviti za nižje račune — pojmi: temperatura dovoda, bivalentna točka
- [ ] 4. Aktualno — Omrežnina in tarife elektrike: kdaj je ogrevanje s toplotno črpalko najcenejše — pojmi: časovni blok, SG Ready
- [ ] 5. Zakaj se kvarijo — Koda napake na zaslonu: kaj narediti, preden pokličete serviserja — pojmi: manometer, obtočna črpalka
- [ ] 6. Vzdrževanje — Sneg, led in veter: zaščita zunanje enote pozimi — pojmi: kondenzat, grelni kabel
- [ ] 7. Zakaj se kvarijo — Visoka poraba elektrike: najpogostejši vzroki — pojmi: sezonska učinkovitost, hranilnik toplote
- [ ] 8. Kako deluje — Rezervni električni grelnik: kdaj se vklopi in koliko stane — pojmi: monoblok, split izvedba
- [ ] 9. Aktualno — Predpisi o F-plinih: kaj pomenijo za lastnika toplotne črpalke — pojmi: F-plini, ekvivalent CO₂
- [ ] 10. Kako deluje — Talno ogrevanje ali radiatorji s toplotno črpalko — pojmi: ekspanzijska posoda, nizkotemperaturno ogrevanje
- [ ] 11. Vzdrževanje — Topla voda in legionela: kako nastaviti program — pojmi: legionela, sanitarna toplotna črpalka
- [ ] 12. Vzdrževanje — Kako izbrati dobrega serviserja — pojmi: spričevalo za F-pline, servisni zapisnik
- [ ] 13. Vzdrževanje — Kdaj je najboljši čas za letni servis — pojmi: kurilna sezona, energijska nalepka
- [ ] 14. Kako deluje — Kako dolgo zdrži toplotna črpalka — pojmi: življenjska doba, kompresor scroll
- [ ] 15. Zakaj se kvarijo — Menjava stare toplotne črpalke: kdaj se splača — pojmi: R410A, R290
- [ ] 16. Kako deluje — Ali toplotna črpalka lahko poleti hladi — pojmi: hlajenje s talnim ogrevanjem, rosišče
- [ ] 17. Kako deluje — Toplotna črpalka in sončna elektrarna — pojmi: samooskrba, net metering
- [ ] 18. Vzdrževanje — Kontrolni seznam pred kurilno sezono — pojmi: odzračevanje, lovilnik nesnage

Ko je seznam izčrpan, nadaljuj z novimi temami v enakem slogu (razdelki naj se izmenjujejo, Vzdrževanje vsaj vsak tretji teden).

## Pravila za samodejno objavo

1. Članek v `src/content/clanki/<slug>.md`, frontmatter kot obstoječi članki; `pubDate` in `updated` = današnji datum.
2. Slovenščina, preprosto, brez žargona; kratki odstavki, H2 podnaslovi, 600–1000 besed.
3. Brez navodil za posege v hladilni krog; ob težavah napotek na serviserja s spričevalom za F-pline.
4. Brez izmišljenih številk. Zneski, cene, predpisi in roki samo z virom (polje `sources`), ki ga preveriš s spletnim iskanjem; v članku napiši mesec preverjanja. Če vira ne najdeš, številke ne navedi.
5. `remember` (3 alineje), `related` (3 obstoječi slugi), `terms` (obstoječi + nova pojma).
6. Nova pojma v `src/content/slovar/<slug>.md` (title, description ≤160 znakov, updated, 2–4 stavki).
7. Notranje povezave relativne (`../../slovar/x/`, `../drug-clanek/`).
8. `npm run build` mora uspeti; preveri, da ni pokvarjenih notranjih povezav.
9. Commit (avtor Klemen Hrastnik, khrastnik@users.noreply.github.com) in push na `main`; počakaj, da GitHub Actions objava uspe.
10. V tem dokumentu odkljukaj vrstico in jo dopolni z datumom in slugom.
