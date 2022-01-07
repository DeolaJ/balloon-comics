import { FC } from 'react';
import Image from 'next/image';

import ErrorBoundary from '../Shared/ErrorBoundary';
import ComicsTemplates from './components/ComicsTemplates';

import { CloudinaryImageProps } from '../../types';

type ComicsTemplatesProps = {
  comicsTemplates: CloudinaryImageProps[];
};

import { HomeWrapper, HomeImageScroller, HomeContentWrapper } from './home.styled';

const Home: FC<ComicsTemplatesProps> = ({ comicsTemplates }) => {
  return (
    <ErrorBoundary link="/">
      <HomeWrapper>
        <HomeContentWrapper>
          <h1>Democratizing comics and memes culture</h1>
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
      <ComicsTemplates comicsTemplates={comicsTemplates} />
    </ErrorBoundary>
  );
};

export default Home;
