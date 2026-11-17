/** Doda base pot (GitHub Pages podmapa) pred notranjo povezavo. */
export function u(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export const SITE_NAME = 'TC diagnostika';
export const SITE_TAGLINE = 'Toplotne črpalke, razložene po domače';

export const SECTIONS = {
  'kako-deluje': {
    title: 'Kako deluje',
    intro: 'Osnove: kako toplotna črpalka greje, katere vrste obstajajo in kaj pomenijo številke na nalepki.',
  },
  'zakaj-se-kvarijo': {
    title: 'Zakaj se kvarijo',
    intro: 'Pogoste težave, njihovi znaki in kdaj je čas, da pokličete strokovnjaka. Brez navodil za posege v hladilni krog.',
  },
  aktualno: {
    title: 'Aktualno',
    intro: 'Subvencije, predpisi in cene. Vsak članek ima datum posodobitve in povezavo na uradni vir.',
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export function fmtDate(d: Date): string {
  return d.toLocaleDateString('sl-SI', { day: 'numeric', month: 'long', year: 'numeric' });
}
