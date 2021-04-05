import { FC } from 'react'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import { ProductGrid } from '@/components/ui'
import {
  ProductCard,
  ProductError,
  ProductSkeleton
} from '@/components/common'
import { useEntries } from '@/lib/swr-hooks'

const IndexPage: FC = () => {
  const { data: products, isLoading: productsLoading } = useEntries(
    '/api/get-products'
  )

  if (productsLoading) {
    return (
      <ProductGrid>
        <ProductSkeleton />
      </ProductGrid>
    )
  }

  return (
    <Center w="full" maxW="1280px">
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

export default IndexPage
