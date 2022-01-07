import { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../src/components/Shared/Layout';
import AboutInfo from '../src/components/About';

export default function About(): ReactElement {
  return (
    <>
      <Head>
        <title>About | Balloon Comics</title>
        <meta name="description" content="Democratizing comics and meme culture" />
        <meta name="twitter:title" content="About | Balloon Comics" />
        <meta property="og:title" content="About | Balloon Comics" />
        <meta property="twitter:site" content="About | Balloon Comics" />
        <meta property="og:url" content="www.ballooncomics.com/about" />
        <meta property="og:description" content="Democratizing comics and meme culture" />
        <meta name="twitter:description" content="Democratizing comics and meme culture" />
      </Head>

      <Layout>
        <AboutInfo />
      </Layout>
    </>
  );
}
