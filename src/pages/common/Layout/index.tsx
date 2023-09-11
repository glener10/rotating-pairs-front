import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type LayoutProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  children: ReactNode;
};
export const Layout = (props: LayoutProps): JSX.Element => {
  const { theme, setTheme, children } = props;

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
