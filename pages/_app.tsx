import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Script src="https://stupefied-kare-218880.netlify.app/remoteEntry.js" strategy="beforeInteractive" />
  
  <Component {...pageProps} />
  </>
}

export default MyApp
