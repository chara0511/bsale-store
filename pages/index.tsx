import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { Paginator, ProductGrid } from '@/components/ui'
import { fetcherBackend } from '@/lib/swr-hooks'

const PER_PAGE: number = 15

// getServerSideProps runs only on the server-side. Next.js will pre-render this page on each request.
// => https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const products: PRODUCT[] = await fetcherBackend(
    'api/get-products',
    undefined,
    query.sort
  )

  if (products === undefined) {
    return { notFound: true }
  }

  return {
    props: {
      products
    }
  }
}

const IndexPage: FC<{ products: PRODUCT[] }> = ({ products }) => {
  const [pageCount, setPageCount] = useState(0)

  return (
    <Center w="full" maxW="1280px" flexDirection="column">
      {Array.isArray(products)
        ? (
        <ProductGrid>
          {products.slice(pageCount, pageCount + PER_PAGE).map((product) => (
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
