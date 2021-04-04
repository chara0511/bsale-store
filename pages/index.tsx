import { FC } from 'react'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import { ProductGrid } from '@/components/ui'
import {
  Menu,
  ProductCard,
  ProductError,
  ProductSkeleton
} from '@/components/common'
import { useEntries } from '@/lib/swr-hooks'

const IndexPage: FC = () => {
  const { data: products, isLoading: productsLoading } = useEntries(
    '/api/get-products'
  )
  const { data: categories, isLoading: categoriesLoading } = useEntries(
    '/api/get-categories'
  )

  if (productsLoading || categoriesLoading) {
    return (
      <ProductGrid>
        <ProductSkeleton />
      </ProductGrid>
    )
  }

  return (
    <Center w="full" maxW="1280px" position="relative">
      <Menu name="categorias" items={categories} />

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
