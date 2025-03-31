/* eslint-disable @next/next/no-page-custom-font */
import { JSX, useEffect } from "react";
import Head from "next/head";
import ym, { YMInitializer } from "react-yandex-metrika";

import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  
// При подключении метрики, показатили LightHouse упадут
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      if (typeof window !== "undefined") {
        ym("hit", url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return (): void => {

      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


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
