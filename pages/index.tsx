import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { Paginator, ProductGrid } from '@/components/ui'
import { useEntries } from '@/lib/swr-hooks'

const PER_PAGE: number = 15

const IndexPage: FC = () => {
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
      <ProductGrid>
        <ProductCardSkeleton />
      </ProductGrid>
    )
  }
  console.log(products)
  return (
    <Center w="full" maxW="1280px" flexDirection="column">
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

export default IndexPage
