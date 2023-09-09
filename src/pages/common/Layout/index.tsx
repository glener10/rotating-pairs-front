import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode; // Tipagem explícita para children
};

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
