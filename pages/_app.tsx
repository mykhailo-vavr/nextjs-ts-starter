import '../styles/globals.css'
import 'antd/dist/antd.css'

import type { AppProps } from 'next/app'
import Layout from '../components/layout'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
