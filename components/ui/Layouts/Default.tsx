import { FC } from 'react'
import Head from 'next/head'

import { Footer, Header } from '@/components/common'

const DefaultLayout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BSALE Store - Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
