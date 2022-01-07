import { ReactNode, useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../src/lib/gtag';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="twitter:creator" content="deo_joe" />
        <meta property="twitter:card" content="summary_large_image" />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="profile" />
        <meta name="theme-color" content="#0e1526" />
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, lagos, nigeria,
          dejoe, dejoe art, de.joe, dejoe_art, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://res.cloudinary.com/dzpntisxj/image/upload/v1618660362/digital-art/IMG_4589_g6a1tx.png"
        />
        <meta name="description" content="Balloon Comics" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/ar_1:1,b_rgb:f7d3c8,c_fill,co_rgb:ffffff,g_auto,w_1000/v1618660362/digital-art/IMG_4589_g6a1tx.png"
        />

        <meta name="twitter:site" content="Balloon Comics" />

        <meta name="twitter:title" content="Balloon Comics" />
        <meta name="twitter:description" content="Balloon Comics" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/ar_1:1,b_rgb:f7d3c8,c_fill,co_rgb:ffffff,g_auto,w_1000/v1618660362/digital-art/IMG_4589_g6a1tx.png"
        />
        <meta property="og:site_name" content="Balloon Comics" />

        <meta property="og:title" content="Balloon Comics" />

        <meta property="og:url" content="www.ballooncomics.com" />

        <meta property="og:description" content="Balloon Comics" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
