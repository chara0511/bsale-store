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
            <Menu name="categorias" items={categories} />
            <Menu name="categorias" items={categories} isResponsive />
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
