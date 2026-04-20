import { de } from './de';
import { en } from './en';

export type Lang = 'en' | 'de';

export function getTranslations(lang: Lang) {
  return lang === 'de' ? de : en;
}

export type { Translations } from './en';
export { de, en };
