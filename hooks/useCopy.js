import useLocale from './useLocale';

export default function useCopy() {
  function t(key, copy) {
    const { locale, defaultLocale } = useLocale();
    return copy[key][locale] || copy[key][defaultLocale] || '';
  }

  return t;
}
