import React, { useState } from 'react';
import Link from 'next/link';
import { MobileButton, MobileMenuList, MobileMenuWrapper } from './mobile-menu.styled';

const MobileMenu = ({ navItems, path }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <MobileButton
        className="block bg-transparent border-none shadow-none outline-none cursor-pointer menu-button w-11 md:hidden focus:outline-none"
        onClick={toggleOpen}
        // eslint-disable-next-line prettier/prettier
      >
        {open ? (
          <p className="m-0 text-3xl font-medium">&times;</p>
        ) : (
          <>
            <span className="block w-6 mb-2 border-t-2 border-black border-solid top" />
            <span className="block w-6 mb-2 border-t-2 border-black border-solid middle" />
            <span className="block w-6 mb-2 border-t-2 border-black border-solid bottom" />
          </>
        )}
      </MobileButton>
      {open && (
        <MobileMenuWrapper
          className={`mobile-menu shadow-sm fixed right-0 top-20 text-black bg-white md:hidden ${open}`}
          // eslint-disable-next-line prettier/prettier
        >
          <MobileMenuList className="p-2 m-0">
            {navItems.map((navItem) => (
              <li className="block p-2 mx-0 my-2" key={navItem.id}>
                <Link href={navItem.link}>
                  <a
                    className={`p-0 text-sm sm:text-base font-medium no-underline uppercase cursor-pointer ${
                      path === navItem.link ? 'active' : ''
                    }`}>
                    {navItem.text}
                  </a>
                </Link>
              </li>
            ))}
          </MobileMenuList>
        </MobileMenuWrapper>
      )}
    </>
  );
};

export default MobileMenu;
