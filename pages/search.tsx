/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Center, Text } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductError,
  ProductSkeleton
} from '@/components/common'
import { ProductGrid } from '@/components/ui'
import { useSearchMeta } from '@/lib/hooks'
import { useEntries } from '@/lib/swr-hooks'

const SearchPage: FC = () => {
  const router = useRouter()
  const { asPath } = router
  const { q }: any = router.query

  const { pathname, category } = useSearchMeta(asPath)

  const { data: products, isLoading: productsFilteredLoading } = useEntries(
    '/api/get-products',
    q
  )

  // * remove this
  console.log({ pathname, category })

  if (productsFilteredLoading) {
    return (
      <Center flexDirection="column" w="full" maxW="1280px">
        {q && (
          <Box as="span" p={2} mb={4}>
            Buscando: "
            <Text as="strong" fontWeight="bold">
              {q}
            </Text>
            "
          </Box>
        )}

        <ProductGrid>
          <ProductSkeleton />
        </ProductGrid>
      </Center>
    )
  }

  return (
    <Center flexDirection="column" w="full" maxW="1280px">
      <Box as="span" p={2} mb={4}>
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
          {products.map((product: PRODUCT) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductGrid>
          )
        : (
        <ProductError {...products} />
          )}
    </Center>
  )
}

export default SearchPage
