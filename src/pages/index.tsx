import { Drawer } from '@/components/organisms/Drawer';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Drawer of Pair Programming</title>
        <meta name="description" content="Drawer of Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
        <Drawer />
      </main>
    </>
  );
}
