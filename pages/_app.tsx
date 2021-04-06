import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

import { DefaultLayout } from '@/components/layouts'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
