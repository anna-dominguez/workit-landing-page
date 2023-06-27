import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <div
    className="grid w-full h-full
                font-body text-davysGrey bg-ghostWhite"
  >
    <Head>
      <title>Workit Landing Page</title>
    </Head>
    <Component {...pageProps} />{' '}
  </div>
)

export default App
