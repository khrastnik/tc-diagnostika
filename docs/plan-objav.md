# Plan objav

Samodejna objava: vsak ponedeljek ob 6.47 en članek + 2 pojma v slovarju. Do 28. 2. 2027 dodatno še vsak četrtek ob 6.47 (dva članka na teden v kurilni sezoni), nato samo ponedeljek.
Postopek in pravila: glej razdelek »Pravila za samodejno objavo« spodaj.
Ko je članek objavljen, se vrstica odkljuka (`[x]`) in doda datum ter slug.

## Vrstni red

- [ ] 1. Zakaj se kvarijo — Zakaj se toplotna črpalka pogosto vklaplja in izklaplja (taktiranje) — pojmi: taktiranje, inverter
- [ ] 2. Zakaj se kvarijo — Hrup toplotne črpalke: kdaj je normalen in kdaj ne — pojmi: štiripotni ventil, ventilator zunanje enote
- [ ] 3. Kako deluje — Krivulja ogrevanja: kaj je in zakaj vpliva na račun za elektriko — pojmi: temperatura dovoda, bivalentna točka
- [ ] 4. Aktualno — Omrežnina in tarife elektrike: kdaj je ogrevanje s toplotno črpalko najcenejše — pojmi: časovni blok, SG Ready
- [ ] 5. Zakaj se kvarijo — Koda napake na zaslonu: kaj narediti, preden pokličete serviserja — pojmi: manometer, obtočna črpalka
- [ ] 6. Vzdrževanje — Sneg, led in veter: zaščita zunanje enote pozimi — pojmi: kondenzat, grelni kabel
- [ ] 7. Zakaj se kvarijo — Visoka poraba elektrike: najpogostejši vzroki — pojmi: sezonska učinkovitost, hranilnik toplote
- [ ] 8. Kako deluje — Rezervni električni grelnik: kdaj se vklopi in koliko stane — pojmi: monoblok, split izvedba
- [ ] 9. Aktualno — Predpisi o F-plinih: kaj pomenijo za lastnika toplotne črpalke — pojmi: F-plini, ekvivalent CO₂
- [ ] 10. Kako deluje — Talno ogrevanje ali radiatorji s toplotno črpalko — pojmi: ekspanzijska posoda, nizkotemperaturno ogrevanje
- [ ] 11. Vzdrževanje — Topla voda in legionela: zakaj je zaščita pomembna — pojmi: legionela, sanitarna toplotna črpalka
- [ ] 12. Vzdrževanje — Kako izbrati dobrega serviserja — pojmi: spričevalo za F-pline, servisni zapisnik
- [ ] 13. Vzdrževanje — Kdaj je najboljši čas za letni servis — pojmi: kurilna sezona, energijska nalepka
- [ ] 14. Kako deluje — Kako dolgo zdrži toplotna črpalka — pojmi: življenjska doba, kompresor scroll
- [ ] 15. Zakaj se kvarijo — Menjava stare toplotne črpalke: kdaj se splača — pojmi: R410A, R290
- [ ] 16. Kako deluje — Ali toplotna črpalka lahko poleti hladi — pojmi: hlajenje s talnim ogrevanjem, rosišče
- [ ] 17. Kako deluje — Toplotna črpalka in sončna elektrarna — pojmi: samooskrba, net metering
- [ ] 18. Vzdrževanje — Pred kurilno sezono: zakaj je zdaj pravi čas za servis — pojmi: odzračevanje, lovilnik nesnage

## Hitrost (proračun)

Stanje 17. 11. 2026 (Lighthouse, telefon): Performance 100, Accessibility 100, Best Practices 100, SEO 100; FCP ≈ 0,7 s, LCP ≈ 1,3 s, CLS 0, skupaj ≈ 65 KB na stran.

Meje, ki jih nobena sprememba ne sme preseči:
- Lighthouse Performance ≥ 95 in Accessibility = 100 na telefonu,
- LCP ≤ 2,0 s, CLS ≤ 0,05, TBT ≤ 150 ms,
- skupna teža strani ≤ 150 KB (brez slik ≤ 100 KB),
- brez zunanjih skript, pisav, sledilnikov ali CDN-jev; CSS ostane vgrajen (`inlineStylesheets: 'always'`),
- slike samo kot SVG ali WebP/AVIF z `width`, `height` in `loading="lazy"`; nove animacije le s `transform`/`opacity` in brez `filter` na animiranih elementih.

## Podaljševanje plana

Ko v seznamu ostaneta 2 ali manj neodkljukanih tem, pri isti objavi dodaj na konec seznama **12 novih tem** v enaki obliki (številka, razdelek, naslov, dva pojma):

- teme ne smejo podvajati obstoječih člankov ali pojmov (preveri `src/content/clanki/` in `src/content/slovar/`),
- upoštevaj letni čas naslednjih 12 tednov (pozimi okvare in poraba, spomladi servis in menjava, poleti hlajenje in priprava, jeseni pred sezono),
- razdelki naj se izmenjujejo, Vzdrževanje vsaj vsak tretji teden, Aktualno vsaj enkrat na mesec (subvencije, predpisi, tarife – vedno z virom),
- izberi vprašanja, ki jih lastniki dejansko iščejo (»zakaj …«, »koliko stane …«, »kdaj …«),
- vsakih 6 mesecev uvrsti posodobitev članka o subvenciji Eko sklada (preveri aktualni poziv).

## Pravila za samodejno objavo

1. Članek v `src/content/clanki/<slug>.md`, frontmatter kot obstoječi članki; `pubDate` in `updated` = današnji datum.
2. Slovenščina, preprosto, brez žargona; kratki odstavki, H2 podnaslovi, 600–1000 besed.
3. Brez navodil za posege v hladilni krog; ob težavah napotek na serviserja s spričevalom za F-pline.
3b. **Vsa vsebina mora biti prilagojena telefonu (mobile friendly)**: članki, slovar, razdelki, ilustracije, kalkulatorji in vse ostale strani. Večina bralcev bere na telefonu. Kratki odstavki (2–4 stavki), podnaslovi vsakih nekaj odstavkov, tabele največ 3 stolpci s kratkimi celicami, brez dolgih nedeljivih nizov (URL-ji samo kot povezave z besedilom). Pred objavo članek preveri v brskalniku pri širini telefona (Playwright, naprava »iPhone 13«): stran se ne sme vodoravno pomikati (`document.documentElement.scrollWidth <= innerWidth`), besedilo in tabele morajo biti berljivi, brez napak v konzoli. Enako velja za vse spremembe dizajna ali komponent. Pred vsakim pushem zaženi `node scripts/check-mobile.cjs` (brez argumentov preveri vse strani) in objavi samo, če so vse OK.
3a. **Uporabnika ne učimo servisirati.** Ne opisujemo, kako se izvaja servis, popravilo, čiščenje, odzračevanje, nastavljanje parametrov ali menjava delov, niti v obliki korakov »naredi sam«. Namen strani je razložiti, kako črpalka deluje, zakaj se kvari in **zakaj je redni servis pri serviserju nujen**. Lastnik lahko le opazuje (zaslon, zvok, led, okolica enote) in pokliče serviserja. Ko omenjamo, kaj vključuje servis, je to vedno opis, kaj naredi serviser, ne navodilo za lastnika.
4. Brez izmišljenih številk. Zneski, cene, predpisi in roki samo z virom (polje `sources`), ki ga preveriš s spletnim iskanjem; v članku napiši mesec preverjanja. Če vira ne najdeš, številke ne navedi.
5. `remember` (3 alineje), `related` (3 obstoječi slugi), `terms` (obstoječi + nova pojma).
6. Nova pojma v `src/content/slovar/<slug>.md` (title, description ≤160 znakov, updated, 2–4 stavki).
7. Notranje povezave relativne (`../../slovar/x/`, `../drug-clanek/`).
8. `npm run build` mora uspeti; preveri, da ni pokvarjenih notranjih povezav.
9. Commit (avtor Klemen Hrastnik, khrastnik@users.noreply.github.com) in push na `main`; počakaj, da GitHub Actions objava uspe.
10. V tem dokumentu odkljukaj vrstico in jo dopolni z datumom in slugom.
