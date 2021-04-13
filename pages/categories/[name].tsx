/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Center, Text } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { ProductGrid } from '@/components/ui'
import { useEntries } from '@/lib/swr-hooks'

const CategoryPage: FC = () => {
  const router = useRouter()
  const { name, sort }: any = router.query

  const { data: productsByCategory, isLoading } = useEntries(
    '/api/get-categories',
    name,
    sort
  )

  if (isLoading) {
    return (
      <Center flexDirection="column" w="full" maxW="1280px" textAlign="center">
        {name && (
          <Box as="span" p={2} mb={4}>
            Buscando productos por categoría: "
            <Text as="strong" fontWeight="bold" textTransform="capitalize">
              {name}
            </Text>
            "
          </Box>
        )}
        <ProductGrid>
          <ProductCardSkeleton />
        </ProductGrid>
      </Center>
    )
  }

  return (
    <Center flexDirection="column" w="full" maxW="1280px" textAlign="center">
      <Box as="span" p={2} mb={4}>
        Mostrando {productsByCategory.length} resultados por categoría "
        <Text as="strong" fontWeight="bold" textTransform="capitalize">
          {name}
        </Text>
        "
      </Box>

      {Array.isArray(productsByCategory)
        ? (
        <ProductGrid>
          {productsByCategory.map((product: PRODUCT) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductGrid>
          )
        : (
        <>
          <ProductError {...productsByCategory} />
          <ProductGrid>
            <ProductCardSkeleton />
          </ProductGrid>
        </>
          )}
    </Center>
  )
}

export default CategoryPage
