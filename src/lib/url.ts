/** Doda base pot (GitHub Pages podmapa) pred notranjo povezavo. */
export function u(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export const SITE_NAME = 'Toplolog';
export const SITE_TAGLINE = 'Toplotne črpalke, razložene po domače';

export const SECTIONS = {
  'kako-deluje': {
    title: 'Kako deluje',
    short: 'Osnove',
    icon: 'cycle',
    color: 'teal',
    intro: 'Osnove brez žargona: kako toplotna črpalka greje, katere vrste obstajajo in kaj pomenijo številke na nalepki.',
  },
  vzdrzevanje: {
    title: 'Vzdrževanje',
    short: 'Servis',
    icon: 'shield',
    color: 'violet',
    intro: 'Toplotna črpalka potrebuje redno nego, tako kot avto. Kaj vključuje servis, kako pogosto in kaj lahko naredite sami.',
  },
  'zakaj-se-kvarijo': {
    title: 'Zakaj se kvarijo',
    short: 'Težave',
    icon: 'wrench',
    color: 'warm',
    intro: 'Pogoste težave, njihovi znaki in kdaj poklicati strokovnjaka. Brez navodil za posege v hladilni krog.',
  },
  aktualno: {
    title: 'Aktualno',
    short: 'Novice',
    icon: 'news',
    color: 'sky',
    intro: 'Subvencije, predpisi in cene. Vsak članek ima datum posodobitve in povezavo na uradni vir.',
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;

/** Kategorije so oznake na člankih, ne ločene podstrani. */
export const CATEGORIES = {
  zacetniki: { label: 'Za začetnike' },
  stroski: { label: 'Stroški' },
  primerjava: { label: 'Primerjava' },
  zanimivosti: { label: 'Zanimivosti' },
} as const;
export type CategoryKey = keyof typeof CATEGORIES;

export function fmtDate(d: Date): string {
  return d.toLocaleDateString('sl-SI', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingTime(body = ''): number {
  const words = body.replace(/[#*_>|`\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
