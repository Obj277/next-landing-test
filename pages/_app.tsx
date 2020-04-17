import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyle';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>지그재그</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}
