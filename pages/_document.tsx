import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/icon-72x72.png"></link>
        <link rel="icon" href="/images/icons/icon-72x72.png"/>
        <meta name="theme-color" content="#fff" />
      </Head>
      <title>Calculator</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
