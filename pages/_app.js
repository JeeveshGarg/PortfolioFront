import '../styles/globals.css'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
// import '../node_modules/materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
     <Head>

<title>Home</title>
<link rel="icon" href="/favicon.ico" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}



</Head>

  <Layout>
  <Component {...pageProps} />
  </Layout>
    </>
  )
}

export default MyApp
