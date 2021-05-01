import { FC } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

import { Footer, Header } from '@/components/ui'

const DefaultLayout: FC = ({ children }) => {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <>
      <Head>
        <title>BSALE Store - Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="shortcut icon"
          href="https://dojiw2m9tvv09.cloudfront.net/16738/2/favicon.ico?268"
          type="image/x-icon"
        ></link>
      </Head>

      <Header />

      <Container
        as="main"
        backgroundColor={bg}
        centerContent
        maxW="full"
        minHeight="100vh"
        py={['7rem', '7rem', '5rem']}
        px="1rem"
        position="relative"
        justifyContent="center"
      >
        {children}
      </Container>

      <Footer />
    </>
  )
}

export default DefaultLayout
