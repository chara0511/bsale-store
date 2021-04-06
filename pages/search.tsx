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
import { useEntries } from '@/lib/swr-hooks'

const SearchPage: FC = () => {
  const router = useRouter()
  const { q, sort }: any = router.query

  const { data: products, isLoading } = useEntries('/api/get-products', q, sort)

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
          <ProductSkeleton />
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
          {products.map((product: PRODUCT) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductGrid>
          )
        : (
        <>
          <ProductError {...products} />
          <ProductGrid>
            <ProductSkeleton />
          </ProductGrid>
        </>
          )}
    </Center>
  )
}

export default SearchPage
