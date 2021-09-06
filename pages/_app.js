import '../styles/globals.css'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
// import '../node_modules/materialize-css/dist/js/materialize.min.js'


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>

<title>Home</title>
<link rel="icon" href="/favicon.ico" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

{/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

<script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script> */}

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}


</Head>

  <Layout>
  <Component {...pageProps} />
  </Layout>
    </>
  )
}

export default MyApp
