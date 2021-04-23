import { useRouter } from 'next/router';

export default function useLocale() {
  const { locale, defaultLocale } = useRouter();
  return { locale, defaultLocale };
}
