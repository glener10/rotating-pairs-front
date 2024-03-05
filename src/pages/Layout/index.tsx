import { Footer } from '@/pages/Layout/Footer';
import { Header } from '@/pages/Layout/Header';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type LayoutProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  children: ReactNode;
};

export const Layout = (props: LayoutProps): JSX.Element => {
  const { theme, setTheme, children } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header theme={theme} setTheme={setTheme} style={{ flex: '0 0 10%' }} />
      <div style={{ flex: '1', overflowY: 'auto' }}>{children}</div>
      <Footer style={{ flex: '0 0 10%' }} />
    </div>
  );
};

export default Layout;
