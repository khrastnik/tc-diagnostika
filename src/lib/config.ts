/**
 * Seznam za obveščanje: prijave se shranijo v Cloudflare D1 prek Workerja (worker/index.js, pot /api/obvestila).
 * Vklopi se, ko je v wrangler.jsonc nastavljena baza D1 (binding DB) in je WAITLIST_ENABLED = true.
 * Na GitHub Pages (brez Workerja) obrazec nikoli ni prikazan.
 */
export const WAITLIST_ENABLED = false;
const onCloudflare = !!(process.env.WORKERS_CI || process.env.CF_PAGES || process.env.WAITLIST_PREVIEW);
export const WAITLIST_ACTION: string = WAITLIST_ENABLED && onCloudflare ? '/api/obvestila' : '';

/** Slovenske statistične regije za neobvezno izbiro (enake kot v worker/index.js). */
export const REGIJE = [
  'Gorenjska', 'Goriška', 'Jugovzhodna Slovenija', 'Koroška', 'Notranjsko-kraška', 'Obalno-kraška',
  'Osrednjeslovenska', 'Podravska', 'Pomurska', 'Posavska', 'Savinjska', 'Zasavska',
];
