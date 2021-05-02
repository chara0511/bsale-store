import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Center } from '@chakra-ui/layout'

import { CATEGORY, PRODUCT } from '@/assets/models'
import {
  MenuSkeleton,
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { Menu, Paginator, ProductGrid } from '@/components/ui'
import { fetcherEntries, fetcherEntry } from '@/lib/fetcher'

const PER_PAGE: number = 15

// getServerSideProps runs only on the server-side. Next.js will pre-render this page on each request.
// => https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const categoryList: CATEGORY[] = await fetcherEntry('api/get-category-list')
  const products: PRODUCT[] = await fetcherEntries(
    'api/products',
    undefined,
    query.sort
  )

  return {
    props: {
      categoryList,
      cookies: req.headers.cookie ?? '',
      products
    }
  }
}

const IndexPage: FC<{
  categoryList: CATEGORY[]
  products: PRODUCT[]
}> = ({ categoryList, products }) => {
  const [pageCount, setPageCount] = useState(0)

  return (
    <Center w="full" maxW="1280px" flexDirection="column">
      {Array.isArray(categoryList)
        ? (
        <>
          <Menu categoryList={categoryList} />
          <Menu categoryList={categoryList} isResponsive />
        </>
          )
        : (
          // handle error
        <MenuSkeleton />
          )}

      {Array.isArray(products)
        ? (
        <ProductGrid>
          {products.slice(pageCount, pageCount + PER_PAGE).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductGrid>
          )
        : (
          // handle error
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
