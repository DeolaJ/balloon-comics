import { FC } from 'react';
import Link from 'next/link';
import { LogoContainer } from './logo.styled';

const Logo: FC = () => {
  return (
    <LogoContainer className="logo">
      <Link href="/">
        <a className="text-xl uppercase font-semibold tracking-wider">Balloon Comics</a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
