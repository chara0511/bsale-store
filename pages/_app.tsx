import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { DefaultLayout } from '@/components/ui'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
