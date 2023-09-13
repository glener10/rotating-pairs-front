import { Layout } from '@/pages/Layout';
import '@/styles/globals.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState('dark');

  return (
    <Theme appearance={theme == 'light' ? 'light' : 'dark'}>
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}
