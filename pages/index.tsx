import { FC } from 'react'

import { CATEGORY, PRODUCT } from '@/assets/models'
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
    <>
      <ul>
        {categories.map((category: CATEGORY) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

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
    </>
  )
}

export default IndexPage
