import { JSX } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  
  return (
    <>
      <Head>
          <title>MyTop App</title>
          <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
