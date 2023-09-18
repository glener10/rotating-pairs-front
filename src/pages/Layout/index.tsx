import { Ad } from '@/components/atoms/Ad';
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
    <>
      <Header theme={theme} setTheme={setTheme} />

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '10%' }}>
          <Ad>{}</Ad>
        </div>
        <div style={{ flex: '80%' }}>{children}</div>
        <div style={{ flex: '10%' }}>
          <Ad>{}</Ad>
        </div>
      </div>
    </>
  );
};

export default Layout;
