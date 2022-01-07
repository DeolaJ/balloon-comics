import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../../Logo';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';

import { ExternalNavContainer } from './external-nav.styled';

const navItems = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'About',
    link: '/about',
  },
  {
    id: 3,
    text: 'Roadmap',
    link: '/roadmap',
  },
];

const ExternalNav: FC = () => {
  const router = useRouter();
  const path = router.pathname;
  const [scrolling, setScrolling] = useState(false);

  const scrollHandler = useRef(() => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  useEffect(() => {
    const scrollFunc = scrollHandler.current;
    window.addEventListener('scroll', scrollFunc);

    return () => window.removeEventListener('scroll', scrollFunc);
  });

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolling ? 'shadow-sm' : null}`}>
      <ExternalNavContainer className="flex items-center justify-between px-6 py-4 md:px-10 text-custom-violet">
        <Logo />
        <DesktopMenu navItems={navItems} path={path} />
        <MobileMenu navItems={navItems} path={path} />
      </ExternalNavContainer>
    </header>
  );
};

export default ExternalNav;
