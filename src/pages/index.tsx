import { Drawer } from '@/components/organisms/Drawer';
import { Saira } from 'next/font/google';
import Head from 'next/head';

const saira = Saira({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Drawer of Pair Programming</title>
        <meta name="description" content="Drawer of Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main className={saira.className}>
        <div>
          <Drawer />
        </div>
      </main>
    </>
  );
}
