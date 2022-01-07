import { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Layout from '../src/components/Shared/Layout';
import Home from '../src/components/Home';

import { CloudinaryImageProps } from '../src/types';

type ComicsTemplatesProps = {
  comicsTemplates: CloudinaryImageProps[];
};

export default function HomePage({ comicsTemplates }: ComicsTemplatesProps): ReactElement {
  return (
    <>
      <Head>
        <title>Balloon Comics</title>
      </Head>

      <Layout>
        <Home comicsTemplates={comicsTemplates} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUDNAME}/image/list/comicTemplate.json`
  );
  const templates = await res.json();
  const comicsTemplates = templates.resources;

  return {
    props: {
      comicsTemplates: comicsTemplates || [],
    },
  };
};
