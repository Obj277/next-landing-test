import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko-KR'>
        <Head>
          <meta charSet='UTF-8'/>
          <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no'/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}