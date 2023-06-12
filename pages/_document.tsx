import { MAP_KEY } from "@/config/env";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        {/* // pwa */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&libraries=places`}
        />
      </body>
    </Html>
  );
}
