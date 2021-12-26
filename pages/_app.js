
import 'tailwindcss/tailwind.css'
import "../styles/globals.css"


import { UseWalletProvider } from 'use-wallet'


function MyApp({ Component, pageProps }) {
  return  <UseWalletProvider>
  <Component {...pageProps} />
</UseWalletProvider>
}

export default MyApp
