import { FC } from 'react';
import Image from 'next/image';

import ErrorBoundary from '../Shared/ErrorBoundary';
import ComicsTemplates from './components/ComicsTemplates';

import { CloudinaryImageProps } from '../../types';

type ComicsTemplatesProps = {
  comicsTemplates: CloudinaryImageProps[];
};

import {
  HomeWrapper,
  HomeImageScroller,
  HomeContentWrapper,
  MidSectionWrapper,
  ImageWrapper,
} from './home.styled';
import { Section, SectionTitle, SectionTitleSub } from '../Shared/Section';
import SpacedList from '../Shared/SpacedList';
import PrimaryButton from '../Shared/Button/PrimaryButton';

const Home: FC<ComicsTemplatesProps> = ({ comicsTemplates }) => {
  return (
    <ErrorBoundary link="/">
      <HomeWrapper>
        <HomeContentWrapper>
          <h1 className="text-black">Democratizing comics and memes culture</h1>
          <p>
            Get the right comics and memes for your pleasure. Choose from our list of comics
            templates.
          </p>
        </HomeContentWrapper>
        <HomeImageScroller>
          <div className="home__phone-img-wrapper">
            <Image
              className="home__phone-img"
              src={
                'https://res.cloudinary.com/dzpntisxj/image/upload/v1618660362/digital-art/IMG_4589_g6a1tx.png'
              }
              aria-hidden
              alt="two iphones"
              width={410}
              height={410}
              layout="intrinsic"
              priority
            />
          </div>
        </HomeImageScroller>
      </HomeWrapper>

      <MidSectionWrapper>
        <ImageWrapper className="w-3/4 px-5 py-8 md:px-12 md:py-24 mx-auto text-center sm:w-2/3">
          <SectionTitleSub>Meet the Characters</SectionTitleSub>
          <Image
            src="https://res.cloudinary.com/dzpntisxj/image/upload/v1656340480/Covers/41629DBB-51E0-472E-87F0-03B05B8FA0D3_dyic1u.png"
            width={1640}
            height={924}
            layout="intrinsic"
            alt="hero illustration"
          />
        </ImageWrapper>
      </MidSectionWrapper>

      <Section style={{ backgroundColor: '#ff8e64' }}>
        <SpacedList className="p-8 md:p-24">
          <div>
            <SectionTitle className="text-left text-white">NFT Collections</SectionTitle>
            <SectionTitleSub className="text-left text-white">
              Collection of characters
            </SectionTitleSub>
          </div>
          <article className="my-4 flex flex-col gap-4">
            <a href="https://opensea.io/collection/balloon-comics-1">
              <PrimaryButton
                text="#Alpha Issue"
                size="lg"
                className="inline-block w-full text-white border-white"
              />
            </a>
            <a href="https://opensea.io/collection/balloon-comics-2">
              <PrimaryButton
                text="#Beta Issue"
                size="lg"
                className="inline-block ml-0 w-full text-white border-white"
              />
            </a>
          </article>
        </SpacedList>
      </Section>

      <ComicsTemplates comicsTemplates={comicsTemplates} />
    </ErrorBoundary>
  );
};

export default Home;
