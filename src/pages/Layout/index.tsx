import { Ad } from '@/components/atoms/Ad';
import useResponsive from '@/hooks/useResponsive';
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

  const breakpoint = useResponsive();

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {breakpoint && breakpoint == 'desktop' ? (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '10%' }}>
            <Ad />
          </div>
          <div style={{ flex: '80%' }}>{children}</div>
          <div style={{ flex: '10%' }}>
            <Ad />
          </div>
        </div>
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
