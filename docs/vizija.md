# Vizija: od Toplologa do servisa toplotnih črpalk

Zapisano 19. 11. 2026. To je načrt za prihodnost, ne naloga za zdaj. Danes je Toplolog samo informativna stran z članki in novicami.

## Izhodišče

- Klemen ima izkušnje s toplotnimi črpalkami, spričevalo za F-pline in vse pogoje za opravljanje servisa.
- Dejavnost še ni registrirana. Dokler ni, stran ne sprejema naročil.
- Toplolog ima 13 člankov o tem, kako črpalke delujejo, zakaj se kvarijo in kako jih vzdrževati. To je osnova za vse spodaj.

## Ena zbirka simptomov, trije izdelki

Jedro je zbirka simptomov (npr. »zunanja enota je zaledenela«, »ne greje dovolj«, »pogosto se vklaplja in izklaplja«). Vsak simptom se zapiše enkrat in se uporabi na treh mestih:

| Simptom | Toplolog (javno) | Prijavi težavo (obrazec) | Diagnostik (zasebno) |
| --- | --- | --- | --- |
| Zunanja enota zaledenela | Kaj je normalno in kaj lastnik varno preveri sam | Kategorija napake + takojšnja kratka razlaga | Tlaki, senzorji, ventil za odtaljevanje, kode napak po znamki |

Javni del nikoli ne vsebuje navodil za posege v hladilni krog. Zasebni del vsebuje vse.

## 1. Obrazec »Prijavi težavo« na Toplologu

- Polja: kategorija napake, opis, fotografija (neobvezno), ime, telefon, kraj ali poštna številka.
- Ko obiskovalec izbere kategorijo, mu obrazec pokaže ustrezen članek. Del prijav, ki niso okvare (npr. običajno odtaljevanje), se tako reši brez klica.
- Tehnično: na osnovi obstoječega obrazca `Waitlist` in Workerja (`worker/index.js`, baza Cloudflare D1). Fotografije v Cloudflare R2, obvestilo o novi prijavi na `info@toplolog.si`, zaščita pred spamom s Cloudflare Turnstile.
- Pred objavo: posodobiti stran Zasebnost (stran bo zbirala osebne podatke) in dodati privolitev.

## 2. Diagnostik (orodje za teren)

- Na terenu izbereš simptom, orodje pokaže, kaj preveriti in v kakšnem vrstnem redu, katere meritve narediti in na kaj paziti.
- Deluje brez signala (kleti, kotlovnice): spletna aplikacija, nameščena na telefon (PWA).
- Ugotovitve z obiska se shranijo in postanejo servisni zapisnik za stranko.
- Prijava s Toplologa že nosi kategorijo, zato je kontrolni seznam ob prihodu že pripravljen.
- AI pomočnik pride v poštev šele, ko je zbirka postopkov zapisana, in samo kot pomoč pri iskanju po njej.

## 3. Admin za povpraševanja

- Vse prijave in povpraševanja na enem mestu: s Toplologa, mojster.si in primerjaj.si.
- Povpraševanj z mojster.si in primerjaj.si ne bi bral s strani portalov (pogoji uporabe tega verjetno ne dovoljujejo, ker so povpraševanja njihov plačljiv izdelek). Namesto tega: obvestila portalov po e-pošti se preusmerijo na npr. `povprasevanja@toplolog.si`, Cloudflare Email Routing jih preda Workerju, ta pa iz njih izlušči kraj, napravo in opis ter jih zapiše v isto bazo.
- Ali portala pošiljata dovolj podatkov po e-pošti, je treba preveriti, ko bo račun odprt.
- Iz admina: status povpraševanja, klic, termin, povezava na diagnostik in servisni zapisnik.

## Vrstni red

1. Registracija dejavnosti. Na strani O meni dodati izkušnje in spričevalo za F-pline.
2. Prvih 10–20 strank sprejeti ročno (telefon, e-pošta, portali), da se pokaže, kateri koraki zamujajo največ časa.
3. Zbirka simptomov: zapisati postopke za najpogostejše težave.
4. Obrazec »Prijavi težavo«.
5. Diagnostik.
6. Admin, oblikovan po tem, kar se je pokazalo pri ročnem delu.

## Odprta vprašanja

- Katero območje bo servis pokrival? Od tega je odvisno, ali obrazec potrebuje kraj in kaj stran odgovori prijavi izven območja.
- Ali so postopki diagnostike že kje zapisani (zapiski, servisna navodila proizvajalcev) ali bodo napisani na novo?
- Za katere znamke bo diagnostik vseboval kode napak?
- Ali bo servis nastopal pod imenom Toplolog ali pod svojim imenom, s Toplologom kot ločeno informativno stranjo?
