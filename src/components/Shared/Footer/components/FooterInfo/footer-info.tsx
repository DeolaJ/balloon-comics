import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../../../Button/PrimaryButton';
import { FooterInfoWrapper } from './footer-info.styled';

const FooterInfo = () => {
  return (
    <FooterInfoWrapper className="md:grid">
      <article className="mb-10 md:mb-0">
        <h4 className="m-0 mb-3 text-lg font-semibold uppercase text-custom-violet">
          Keep in touch
        </h4>
        <p className="mb-4 text-xs sm:text-sm">
          Do you have a request, want to join our team, or just want to say hi?
        </p>
        <Link href="mailto:balloooncomics@gmail.com">
          <a>
            <PrimaryButton text="Get in touch" className="px-2 py-1 text-xs" />
          </a>
        </Link>
      </article>
      <article>
        <h4 className="m-0 mb-3 text-lg font-semibold uppercase text-custom-violet">Company</h4>
        <ul>
          <li className="mb-2">
            <Link href="/about">
              <a className="text-sm leading-3 hover:font-semibold">About</a>
            </Link>
          </li>
          {/* <li className="mb-1 hover:border hover:border-solid">
            <Link href="/meet-the-characters">
              <a className="text-sm leading-3">Meet the Characters</a>
            </Link>
          </li> */}
          <li className="mb-2">
            <Link href="/roadmap">
              <a className="text-sm leading-3 hover:font-semibold">RoadMap</a>
            </Link>
          </li>
        </ul>
      </article>
    </FooterInfoWrapper>
  );
};

export default FooterInfo;
