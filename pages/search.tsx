import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Box, Center, Text } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { Paginator, ProductGrid } from '@/components/ui'
import { fetcherBackend } from '@/lib/swr-hooks'

const PER_PAGE: number = 15

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q, sort } = query

  const products: PRODUCT[] = await fetcherBackend('api/products', q, sort)

  return {
    props: {
      products,
      q
    }
  }
}

const SearchPage: FC<{
  products: PRODUCT[]
  q: string | string[] | undefined
}> = ({ products, q }) => {
  const [pageCount, setPageCount] = useState(0)

  return (
    <Center flexDirection="column" w="full" maxW="1280px">
      <Box as="span" p={2} mb={4} textAlign="center">
        Mostrando {products.length} resultados{' '}
        {q !== undefined && (
          <>
            para "
            <Text as="strong" fontWeight="bold">
              {q}
            </Text>
            "
          </>
        )}
      </Box>

      {Array.isArray(products)
        ? (
        <ProductGrid>
          {products
            .slice(pageCount, pageCount + PER_PAGE)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </ProductGrid>
          )
        : (
        <>
          <ProductError {...products} />
          <ProductGrid>
            <ProductCardSkeleton />
          </ProductGrid>
        </>
          )}

      <Paginator
        products={products}
        pageCount={setPageCount}
        perPage={PER_PAGE}
      />
    </Center>
  )
}

export default SearchPage
