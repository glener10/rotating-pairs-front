import { Layout } from '@/pages/Layout';
import '@/styles/AboutDialog.css';
import '@/styles/globals.css';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState('dark');

  return (
    <Theme appearance={theme == 'light' ? 'light' : 'dark'}>
      <TooltipProvider>
        <Layout theme={theme} setTheme={setTheme}>
          <Analytics />
          <Component {...pageProps} />
        </Layout>
      </TooltipProvider>
    </Theme>
  );
}
