import { FC } from 'react'

import { Product } from '@/assets/models'
import { ProductGrid } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { useProducts } from '@/lib/swr-hooks'

const IndexPage: FC = () => {
  const { products, isLoading } = useProducts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(products)
  return (
    <div>
      <ProductGrid>
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>
    </div>
  )
}

export default IndexPage
