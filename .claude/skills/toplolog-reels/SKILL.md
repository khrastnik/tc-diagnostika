---
name: toplolog-reels
description: Pravila in postopek za izdelavo Instagram Reels za »Toplolog« (TC diagnostika) – kratke, poučne, animirane videe o toplotnih črpalkah, ki gledalca naučijo, zakaj so redni servisi in pregledi nujni za dolgo življenjsko dobo naprave. Uporabi vedno, ko uporabnik prosi za reel, Instagram video, kratek video, animacijo za družbena omrežja, scenarij za IG/TikTok/Shorts ali »objavo za Toplolog«, tudi če reče le »naredi reel o …« ali »pripravi video iz članka«.
---

# Toplolog Reels

Reel je 15–30 s dolg, pokončen (1080 × 1920) animiran video v slovenščini, **vedno s podnapisi**. Izdelamo ga kot HTML-animacijo v `instagram/`, ki jo upodabljalnik zajame sličico za sličico in ffmpeg sestavi v MP4.

**Namen vsakega Reela:** gledalec se nauči nekaj koristnega o svoji toplotni črpalki in odide z občutkom, da je **redni servis normalen, zaželen in pameten** – kot servis avta. Ne strašimo in ne prodajamo; razlagamo.

## 1. Vsebinska pravila (obvezna)

1. **Poučno + zanimivo.** Vsak Reel odgovori na eno konkretno vprašanje ali razbije eno zmoto. Ena ideja na Reel.
2. **Sporočilo o servisu.** Vsak Reel se poveže z rednim servisom ali pregledom: preventiva, daljša življenjska doba, nižji računi, manj okvar sredi zime, ohranjena garancija. Najmočnejša prispodoba: **avto in servisna knjižica**.
3. **Ne učimo servisirati.** Nobenih korakov »naredi sam«: ne čiščenje, ne odzračevanje, ne nastavljanje parametrov, ne menjava delov, ne posegi v hladilni krog. Lastnik lahko **opazuje** (zaslon, zvok, led, okolica enote) in **pokliče serviserja**. Ko prikažemo delo, je sporočilo »to naredi strokovnjak«.
4. **Brez izmišljenih številk.** Odstotki prihrankov, življenjske dobe, cene, roki in predpisi samo, če so preverjeni z virom (kot v `docs/plan-objav.md`). Če vira ni, raje kvalitativno (»višji računi«, »hitrejša obraba«).
5. **Brez ponujanja storitev**, dokler ni pridobljeno pooblastilo MOP in spričevalo za F-pline: ne »naročite se«, ne cene lastnih storitev. CTA vodi na članek na spletni strani.
6. **Brez strašenja.** Ton: miren strokovnjak in prijazen sosed. »Brez panike« je dober začetek, »Vaša črpalka bo eksplodirala« ni.
7. **Zasebnost in pravice:** brez obrazov, naslovov, hišnih številk, registrskih tablic; brez blagovnih znamk kot priporočil; glasbo doda uporabnik iz Instagramove knjižnice (video izdelamo brez glasbe, s tiho zvočno sledjo).

## 2. Struktura (dramaturgija)

| Čas | Del | Namen |
| --- | --- | --- |
| 0–2,5 s | **Zanka (hook)** | Vprašanje, presenečenje ali zmota, ki jo gledalec prepozna: »Iz črpalke se kadi?!«, »Avto peljete na servis. Kaj pa črpalko?« |
| 2,5–6 s | **Obrat** | Kratek odgovor, ki pomiri ali preseneti: »Brez panike. To je para.« |
| 6–14 s | **Razlaga** | Kako/zakaj, v 2–3 korakih, z animirano ilustracijo, ki kaže dogajanje. |
| 14–18 s | **Normalno / ni normalno** ali **kaj opazite** | Kontrolni seznam s kljukicami in križci. |
| 18–22 s | **Sporočilo o servisu** | Kako redni pregled to prepreči ali odkrije: »Serviser to opazi, še preden vi.« |
| zadnje 2,5 s | **CTA** | Logotip Toplolog + »Več v članku – povezava v opisu«. Brez prodaje. |

Skupna dolžina **15–25 s** (največ 30 s). Krajši Reel, ki ga ljudje pogledajo do konca, je boljši od daljšega.

## 3. Besedilo na zaslonu

- **Največ ~8 besed na naslov**, ~12 besed na podnaslov. Pravilo branja: vsaj **1 s na 3 besede** + 0,5 s.
- Naslov `h1` 96–110 px, podnaslov 48–52 px, seznami 48–52 px. Krepko (800) za naslove.
- **Poudari ključno besedo** z barvo: `<span class="ok">` (zelena, pozitivno/rešitev), `<em>` (oranžna, težava/opozorilo).
- Slovenski narekovaji »…«, slovenska decimalna vejica, ločila brez presledka pred vprašajem.
- Vse besedilo mora biti berljivo **brez zvoka** (večina gleda brez zvoka).

### Podnapisi (obvezni v vsakem Reelu)

Vsak Reel ima **podnapise**: pas na dnu slike (`<div class="subs"></div>`, vrh pri 1330 px, nad Instagramovo cono za opis), ki teče skozi ves video.

- Podnapisi so **pripoved** (kot glas pripovedovalca): cel, naraven stavek, ki naslov na zaslonu **dopolni**, ne ponovi. Naslov: »To je para.« → podnapis: »Brez skrbi – to ni dim, ampak vodna para.«
- En podnapis na prizor (ali dva pri daljšem prizoru), **največ ~80 znakov** (2 vrstici), prikazan vsaj 1,5 s.
- Pokrivajo **ves video od 0,2 s do konca**, brez daljših vrzeli; **zadnji podnapis nosi sporočilo o servisu** ali povabilo na članek.
- V časovnici: `r.subs([[od, do, 'besedilo'], …])`. Upodabljalnik iz njih samodejno izdela `podnapisi.srt` (za TikTok, YouTube Shorts, Facebook); shrani ga kot `instagram/reel-<tema>.srt`.
- Upodabljalnik izpiše opozorilo, če podnapisov ni – tak Reel ni dokončan.
- Ilustracije in CTA ne smejo segati v pas podnapisov (1330–1490 px).

## 4. Animacija, ki pritegne

- **Gibanje ves čas:** nekaj se mora premikati vsaj vsakih **1,5–2 s** (nov prizor, poudarek, števec, kljukica, ilustracija). Mirovanje > 2 s = gledalec odide.
- **Prvi kader se premika takoj** (od 0 s), brez praznega uvoda ali logotipa na začetku.
- **Ilustracija pripoveduje:** prikaži dogajanje (ventilator se vrti, ivje raste in se stopi, kazalec na manometru, števec zagonov, para), ne le okraska. Ilustracija naj ostane na istem mestu skozi več prizorov in se **spreminja** – to drži pozornost.
- **Različni vhodi prizorov:** menjaj `blur`, `up`, `left`, `scale`; seznami prihajajo zaporedoma (`stagger`), ključni elementi s poskokom (`pop`), opozorila s tresljajem (`shake`), številke tečejo (`count`).
- **Vzorec presenečenja** (pattern interrupt) okoli sredine: barvni obrat, velika številka, križec, ki se strese.
- **Vrstica napredka** na vrhu (`r.progress()`) – gledalec vidi, da je kratko.
- Animiraj le `transform` in `opacity` (in `filter: blur` ob vhodu); brez trzanja.

## 5. Vizualni slog (enako kot spletna stran)

- Ozadje: temno zelena `#0e1f1a` z oranžnim sijem zgoraj desno in zelenim spodaj levo (iz predloge).
- Barve: zelena `#13a07f` / svetla `#6ed8b8` (rešitev, »normalno«), oranžna `#e8603c` / `#ff8a65` (težava), modra `#2b6be0` / `#7aa7ef` (mraz, voda, led), bela kartica `#f7faf9` za naprave.
- Pisava: Plus Jakarta Sans (lokalno iz `node_modules`), brez drugih pisav.
- Blagovna znamka: zgoraj levo znak `brand/toplolog-znak.svg` (hiša z utripom) in napis »Toplolog«; isti znak večji v CTA na koncu. Ne izmišljuj drugih logotipov.
- **Varne cone:** zgoraj 220 px (vrstica napredka, znamka), **spodaj 420 px** in **desno 160 px** sta pod Instagramovimi gumbi/opisom – tja ne postavljaj ključnega besedila.

## 6. Tehnični postopek

1. **Tema:** iz zadnjega članka (`src/content/clanki/`) ali iz `docs/plan-objav.md`. Preberi članek; Reel je njegov povzetek z eno idejo.
2. **Scenarij najprej:** napiši tabelo prizorov (čas, besedilo, kaj se animira) in preveri pravila 1–4.
3. **Kopiraj predlogo:** `instagram/reel-predloga.html` → `instagram/reel-<tema>.html`. Spremeni besedila, ilustracijo (SVG) in časovnico v `reel(T, (r) => { … })`.
   - Časovnica je v **sekundah** (`instagram/reel-lib.js`): `r.scene(sel, od, do, {enter})`, `r.stagger(sel, od, korak)`, `r.pop(sel, t)`, `r.shake(sel, od, do)`, `r.count(sel, od, do, t1, t2)`, `r.css(sel, [[t, {css}], …])`, `r.loop(sel, keyframes, perioda)`, `r.progress()`.
   - Elementi z lastnim `style="…"` (npr. `transform-origin` na SVG skupini) morajo imeti atribut `data-keep`, sicer jih upodabljalnik pobriše.
4. **Predogled (obvezno pred celotnim upodabljanjem):** zajemi 6–8 sličic in jih sestavi v en pregledni trak; preveri, da ni ostankov prejšnjih prizorov, da besedilo ni v varnih conah in da je vse berljivo.
   ```bash
   cd instagram
   for t in 1.5 4 7 10 13 16; do mkdir -p /tmp/pv-$t; node render-reel.cjs "$PWD/reel-<tema>.html" /tmp/pv-$t 30 <T> $t; done
   ffmpeg -y $(for t in 1.5 4 7 10 13 16; do echo -n "-i /tmp/pv-$t/f0000.jpg "; done) -filter_complex "hstack=inputs=6,scale=2160:-1" /tmp/predogled.jpg
   ```
5. **Upodobi in sestavi:**
   ```bash
   mkdir -p /tmp/frames && node render-reel.cjs "$PWD/reel-<tema>.html" /tmp/frames 30
   ffmpeg -y -framerate 30 -i /tmp/frames/f%04d.jpg -f lavfi -t <T> -i anullsrc=r=48000:cl=stereo \
     -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 20 -preset slow -c:a aac -b:a 128k -shortest -movflags +faststart reel-<tema>.mp4
   ```
   (Pri scratchpad mapi uporabi ta namesto `/tmp`.) Preveri s `ffprobe`: h264, 1080×1920, 30 fps, trajanje = T.
6. **Podnapisi kot datoteka:** kopiraj `podnapisi.srt` iz mape sličic v `instagram/reel-<tema>.srt`.
7. **Opis za objavo:** `instagram/reel-<tema>-opis.txt` s prvo vrstico kot zanko, 2–4 kratkimi odstavki, sporočilom o servisu, »povezava v opisu profila«, 8–12 ključniki (#toplotnačrpalka #ogrevanje …), namigi (čas naslovnice, glasba iz knjižnice, anketa v Zgodbi) in URL članka.
8. **Shrani in pošlji:** commit HTML, MP4, SRT in opis v `instagram/` (ta mapa se ne objavi na spletni strani); MP4 in opis pošlji uporabniku.

## 7. Kontrolni seznam pred oddajo

- [ ] Ena ideja, odgovor na eno vprašanje; jasna zanka v prvih 2,5 s.
- [ ] Sporočilo o rednem servisu/pregledu je prisotno in pozitivno (preventiva, dolga življenjska doba).
- [ ] Nobenih navodil »naredi sam«, nobenih nepreverjenih številk, nobene ponudbe storitev.
- [ ] Gibanje vsaj vsakih 2 s; ilustracija kaže dogajanje.
- [ ] Besedilo kratko, berljivo brez zvoka, izven varnih con.
- [ ] Podnapisi skozi ves video (pripoved, ≤ 80 znakov, zadnji o servisu); `reel-<tema>.srt` shranjen.
- [ ] Predogled brez ostankov prejšnjih prizorov; MP4 1080×1920, 30 fps, 15–30 s.
- [ ] Opis z zanko, ključniki in povezavo do članka.

## 8. Banka idej (povezano s servisom)

- »Avto peljete na servis vsako leto. Kaj pa toplotno črpalko?« – primerjava servisne knjižice.
- »Iz črpalke se kadi?« – odtaljevanje; serviser preveri, da poteka pravilno.
- »Vklopi, ugasne, vklopi …« – taktiranje in obraba kompresorja; serviser najde vzrok.
- »Zakaj je račun letos višji?« – umazan uparjalnik, nastavitve; pregled povrne izkoristek.
- »Kaj serviser naredi v eni uri?« – kontrolni seznam (kot opis, ne navodilo).
- »5 znakov, da črpalka kliče na pomoč« – zvok, led, koda napake, tlak, poraba.
- »Garancija ni samoumevna« – servisni zapisnik kot servisna knjižica.
- »Mit: nova črpalka ne potrebuje servisa« – prav nove naprave potrebujejo prve preglede.
