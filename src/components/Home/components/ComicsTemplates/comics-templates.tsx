import { ReactElement } from 'react';
import Link from 'next/link';

import ComicsTemplateGrid from '../ComicsTemplatesGrid';
import { Section, SectionTitleSub } from '../../../Shared/Section';

import { CloudinaryImageProps } from '../../../../types';

type ComicsTemplatesProps = {
  comicsTemplates: CloudinaryImageProps[];
};

function ComicsTemplates({ comicsTemplates }: ComicsTemplatesProps): ReactElement {
  return (
    <Section className="py-14 md:py-24 md:px-14 lg:px-14">
      <SectionTitleSub>Balloon Comics Templates</SectionTitleSub>
      <article className="my-4">
        <p>
          To use any of the templates, please read this{` `}
          <Link href="https://deolaj.com/notes/balloon-comics-templates-guide">
            <a className="text-purple-700 hover:underline" target="_blank">
              guide
            </a>
          </Link>
          {` first`}
        </p>
      </article>
      <ComicsTemplateGrid comicsTemplates={comicsTemplates} />
    </Section>
  );
}

export default ComicsTemplates;
