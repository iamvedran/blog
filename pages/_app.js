import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Vedran's Blog'</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>   
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
