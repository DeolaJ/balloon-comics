import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../src/components/Shared/Layout';
import RoadmapInfo from '../src/components/Roadmap';

export default function Roadmap(): ReactElement {
  return (
    <>
      <Head>
        <title>Roadmap | Balloon Comics</title>
        <meta name="description" content="Democratizing comics and meme culture" />
        <meta name="twitter:title" content="Roadmap | Balloon Comics" />
        <meta property="og:title" content="Roadmap | Balloon Comics" />
        <meta property="twitter:site" content="Roadmap | Balloon Comics" />
        <meta property="og:url" content="www.ballooncomics.com/roadmap" />
        <meta property="og:description" content="Democratizing comics and meme culture" />
        <meta name="twitter:description" content="Democratizing comics and meme culture" />
      </Head>

      <Layout>
        <RoadmapInfo />
      </Layout>
    </>
  );
}
