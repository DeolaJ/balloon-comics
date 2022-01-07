import React from 'react';
import Link from 'next/link';
import { DesktopMenuWrapper } from './desktop-menu.styled';

const DesktopMenu = ({ navItems, path }) => (
  <DesktopMenuWrapper className="hidden p-0 m-0 md:block">
    {navItems.map((navItem) => (
      <li className="inline-block p-2 mx-2 my-0 w-24" key={navItem.id}>
        <Link href={navItem.link}>
          <a
            className={`p-1 mr-2 text-lg font-medium no-underline uppercase cursor-pointer ${
              path === navItem.link ? 'active' : ''
            }`}>
            {navItem.text}
          </a>
        </Link>
      </li>
    ))}
  </DesktopMenuWrapper>
);

export default DesktopMenu;
