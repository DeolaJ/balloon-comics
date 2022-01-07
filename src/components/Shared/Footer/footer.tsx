import React from 'react';
import SocialIcons from '../SocialIcons';
import FooterInfo from './components/FooterInfo';
import { FooterWrapper } from './footer.styled';

const Footer = () => (
  <FooterWrapper className="w-full px-6 pt-8 pb-6 md:px-10 md:pt-14 md:pb-10">
    <FooterInfo />
    <SocialIcons />
    <article className="my-4 text-sm tracking-wide text-center copywrite-content">
      {'©'}
      {new Date().getFullYear()}
      {' - Balloon Comics'}
    </article>
  </FooterWrapper>
);

export default Footer;
