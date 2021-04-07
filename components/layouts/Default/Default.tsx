import { FC } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/layout'

import { MenuSkeleton } from '@/components/common'
import { Footer, Header, Menu } from '@/components/ui'
import { useEntries } from '@/lib/swr-hooks'

const DefaultLayout: FC = ({ children }) => {
  const { data: categories, isLoading } = useEntries('/api/get-categories')

  return (
    <>
      <Head>
        <title>BSALE Store - Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="https://dojiw2m9tvv09.cloudfront.net/16738/2/favicon.ico?268" type="image/x-icon"></link>
      </Head>

      <Header />

      <Container
        as="main"
        backgroundColor="gray.50"
        centerContent
        maxW="full"
        minHeight="100vh"
        py={['7rem', '7rem', '5rem']}
        px="1rem"
        position="relative"
      >
        {isLoading && <MenuSkeleton />}

        {Array.isArray(categories)
          ? (
          <>
            <Menu name="categorias" categories={categories} />
            <Menu name="categorias" categories={categories} isResponsive />
          </>
            )
          : (
          <MenuSkeleton />
            )}
        {children}
      </Container>

      <Footer />
    </>
  )
}

export default DefaultLayout
