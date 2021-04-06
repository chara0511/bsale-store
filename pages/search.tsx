/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Center, Text } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductError,
  ProductsSkeleton
} from '@/components/common'
import { Paginator, ProductGrid } from '@/components/ui'
import { useEntries } from '@/lib/swr-hooks'

const PER_PAGE: number = 15

const SearchPage: FC = () => {
  const router = useRouter()
  const { q, sort }: any = router.query

  const { data: products, isLoading } = useEntries(
    '/api/get-products',
    q,
    sort
  )

  const [pageCount, setPageCount] = useState(0)

  if (isLoading) {
    return (
      <Center flexDirection="column" w="full" maxW="1280px">
        {q && (
          <Box as="span" p={2} mb={4} textAlign="center">
            Buscando: "
            <Text as="strong" fontWeight="bold">
              {q}
            </Text>
            "
          </Box>
        )}

        <ProductGrid>
          <ProductsSkeleton />
        </ProductGrid>
      </Center>
    )
  }

  return (
    <Center flexDirection="column" w="full" maxW="1280px">
      <Box as="span" p={2} mb={4} textAlign="center">
        Mostrando {products.length} resultados{' '}
        {q && (
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
            .map((product: PRODUCT) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </ProductGrid>
          )
        : (
        <>
          <ProductError {...products} />
          <ProductGrid>
            <ProductsSkeleton />
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
