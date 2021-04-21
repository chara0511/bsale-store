import type { AppProps } from 'next/app'
import { GetServerSideProps } from 'next'

import { DefaultLayout } from '@/components/layouts'
import ChakraUI from 'styles/ChakraUI'
import '../styles/globals.css'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? ''
    }
  }
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraUI cookies={pageProps.cookies}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraUI>
  )
}

export default MyApp
