/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import { useRouter } from 'next/router'

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
  const { q }: any = router.query
  const { asPath } = router

  const { pathname, category } = useSearchMeta(asPath)

  const { data: products, isLoading } = useEntries('/api/get-products', q)

  console.log({ asPath, pathname, category })

  if (isLoading) {
    return (
      <>
        {q && (
          <span>
            Searching for: "<strong>{q}</strong>"
          </span>
        )}
        <ProductGrid>
          <ProductSkeleton />
        </ProductGrid>
      </>
    )
  }

  return (
    <>
      <span>
        Mostrando {products.length} resultados{' '}
        {q && (
          <>
            para "<strong>{q}</strong>"
          </>
        )}
      </span>
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

export default SearchPage
