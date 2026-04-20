export function formatDate(dateStr: string, lang: 'en' | 'de'): string {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'short',
  });
}
