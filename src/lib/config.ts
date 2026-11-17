/**
 * Ključ Web3Forms (https://web3forms.com). Ključ je javen po zasnovi: določa le,
 * na kateri e-poštni naslov se pošljejo oddani obrazci.
 * Nastavi ga kot spremenljivko repozitorija WEB3FORMS_KEY (Settings → Secrets and variables → Actions → Variables).
 */
export const FORM_ACCESS_KEY: string = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
