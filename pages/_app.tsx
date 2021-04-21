import type { AppProps } from 'next/app'

import { DefaultLayout } from '@/components/layouts'
import ChakraUI from 'styles/ChakraUI'
import '../styles/globals.css'

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
