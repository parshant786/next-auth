import '../styles/globals.css'
import{Header} from './../components/Header'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if(Component.layout){
    return Component.layout(<Component {...pageProps} />)
  }

  return <><Head><title>parshant</title><meta name='page' description="this is description" /></Head><Header /><Component {...pageProps} /></>
}

export default MyApp
