import { FC, PropsWithChildren } from 'react';
import { LayoutContainer } from './layout.styled';
import GlobalStyles from '../GlobalStyles';
import Footer from '../Footer';
import ExternalNav from '../Nav/ExternalNav';

type LayoutProps = {
  className?: string;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, className }) => {
  return (
    <LayoutContainer className={className}>
      <GlobalStyles />
      <ExternalNav />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
