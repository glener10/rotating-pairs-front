import { Drawer } from '@/components/organisms/Drawer';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Drawer of Pair Programming</title>
        <meta name="description" content="Drawer of Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Drawer />
        </div>
      </main>
    </>
  );
}
