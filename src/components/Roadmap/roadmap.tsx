import { FC } from 'react';
import { Section, SectionTitleSub } from '../Shared/Section';

const roadmap = [
  {
    title: 'In the current 1-month period (Jan)',
    list: [
      {
        text: 'Develop the landing page and a few external pages',
        checked: true,
      },
      {
        text: 'Setup the domain, google analytics, and sitemap for the landing page',
        checked: true,
      },
      {
        text: 'Create the section for comics templates pages',
        checked: true,
      },
      {
        text: 'Resume creating comics with consistent style',
        checked: true,
      },
    ],
  },
  {
    title: 'In the next 1-month period (Feb)',
    list: [
      {
        text: 'Launch the initial collection of characters on Opensea',
        checked: true,
      },
      {
        text: 'Create the individual pages for each characters',
        checked: false,
      },
    ],
  },
  {
    title: 'In the next 1-month period (June)',
    list: [
      {
        text: 'Start the second collection of characters on Opensea',
        checked: true,
      },
    ],
  },
];

const RoadmapInfo: FC = () => {
  return (
    <Section className="py-14 md:py-24 md:px-14 lg:px-14">
      <SectionTitleSub>{"Balloon Comics' Roadmap"}</SectionTitleSub>

      <article>
        {roadmap.reverse().map((plan) => (
          <ul className="mb-8 list-disc" key={plan.title}>
            <li className="mb-2 text-base sm:text-lg md:text-xl font-medium">{plan.title}</li>

            <ul className="p-0 m-0 list-none">
              {plan.list.map((listItem) => (
                <li
                  className="relative flex items-center mb-3 text-sm sm:text-base leading-6"
                  key={listItem.text}>
                  {listItem.checked && (
                    <span className="absolute text-xs top-1 -left-5 sm:-left-6">&#x2713;</span>
                  )}
                  <p>{listItem.text}</p>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </article>
    </Section>
  );
};

export default RoadmapInfo;
