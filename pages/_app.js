import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-XXXXXXXXX-X'); // Yaha apna AdSense ID lagao
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
