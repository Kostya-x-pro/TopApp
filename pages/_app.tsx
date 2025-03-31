/* eslint-disable @next/next/no-page-custom-font */
import { JSX } from "react";
import Head from "next/head";
import ym, { YMInitializer } from "react-yandex-metrika";

import Router from "next/router";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

// При подключении метрики, показатили LightHouse упадут
Router.events.on('routeChangeComplete', (url: string): void => {
  if (typeof window !== "undefined") {
          ym("hit", url);
        }
});

export default function App({ Component, pageProps,router }: AppProps): JSX.Element {

  return (
    <>
      <Head>
          <title>MyTop App</title>
          <link  rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link rel="preconnect" href="https://mc.yandex.ru"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet"/>
          <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMIN + router.asPath} />
          <meta property="og:locale" content="ru_RU" />
          
      </Head>
      <YMInitializer 
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}
