/* eslint-disable @next/next/no-page-custom-font */
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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet"/>
          
      </Head>
      <Component {...pageProps} />
    </>
  );
}
