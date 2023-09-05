import { Drawer } from '@/components/organisms/Drawer';
import styles from './page.module.css';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Drawer />
      </div>

      <div className={styles.grid}>
        <p>Rodapé</p>
      </div>
    </main>
  );
}
