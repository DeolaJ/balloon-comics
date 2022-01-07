import { ReactElement } from 'react';

import ComicsTemplateGrid from '../ComicsTemplatesGrid';
import { Section, SectionTitleSub } from '../../../Shared/Section';
import Link from 'next/link';
import PrimaryButton from '../../../Shared/Button/PrimaryButton';

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
          To use any of the templates
          <Link href="mailto:balloooncomics@gmail.com">
            <a>
              <PrimaryButton text="Get in touch" className="inline-block ml-4" />
            </a>
          </Link>
        </p>
      </article>
      <ComicsTemplateGrid comicsTemplates={comicsTemplates} />
    </Section>
  );
}

export default ComicsTemplates;
