import '../styles/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/owl.carousel.min.css';
import '../styles/font-awesome.min.css';
import '../styles/lineicons.min.css';
import '../styles/magnific-popup.css';
import '../styles/style.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NeedMore Ecommerce</title>

        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.min.js"></Script>
        <Script src="js/waypoints.min.js"></Script>
        <Script src="js/jquery.easing.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/jquery.counterup.min.js"></Script>
        <Script src="js/jquery.countdown.min.js"></Script>
        <Script src="js/jquery.passwordstrength.js"></Script>
        <Script src="js/dark-mode-switch.js"></Script>
        <Script src="js/no-internet.js"></Script>
        <Script src="js/active.js"></Script>
        <Script src="js/pwa.js"></Script>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
