/* eslint-disable react/jsx-curly-brace-presence */
import { FC } from 'react';
import { Section, SectionTitleSub } from '../Shared/Section';

const mission = 'Balloon Comics is a platform for democratizing comics and meme culture.';

const vision = 'We want to be the number 1. platform for comics and memes';

const RoadmapInfo: FC = () => {
  return (
    <Section className="py-14 md:py-24 md:px-14 lg:px-14">
      <SectionTitleSub>About Balloon Comics</SectionTitleSub>

      <article>
        <h2 className="m-0 mb-1 text-lg sm:text-2xl font-semibold">Mission</h2>
        <p className="mb-10 text-sm sm:text-base leading-6">{mission}</p>

        <h2 className="m-0 mb-1 text-lg sm:text-2xl font-semibold">Vision</h2>
        <p className="mb-10 text-sm sm:text-base leading-6">{vision}</p>
      </article>
    </Section>
  );
};

export default RoadmapInfo;
