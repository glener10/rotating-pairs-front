import { Layout } from '@/pages/Layout';
import '@/styles/Footer.css';
import '@/styles/WarningToast.css';
import '@/styles/globals.css';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { JSX, useEffect, useState } from 'react';

export const getThemePreference = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('themePreference') || 'dark';
  }

  return 'dark';
};

export const setThemePreference = (theme: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('themePreference', theme);
  }
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(getThemePreference());
  }, []);

  useEffect(() => {
    setThemePreference(theme);
  }, [theme]);

  return (
    <Theme appearance={theme === 'light' ? 'light' : 'dark'}>
      <TooltipProvider>
        <Layout theme={theme} setTheme={setTheme}>
          <Analytics />
          <Component {...pageProps} />
        </Layout>
      </TooltipProvider>
    </Theme>
  );
}
