import type { AppProps } from 'next/app'

import { CARTProvider } from 'context/cart-context'
import { DefaultLayout } from '@/components/layouts'
import ChakraUI from 'styles/ChakraUI'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraUI cookies={pageProps.cookies}>
      <CARTProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </CARTProvider>
    </ChakraUI>
  )
}

export default MyApp
