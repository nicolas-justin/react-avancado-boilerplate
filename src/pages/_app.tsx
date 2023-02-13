import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate | React Avançado</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Projeto construído com base no curso de React Avançado do Willian Justen"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
