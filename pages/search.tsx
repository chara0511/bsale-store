import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Box, Center, Text } from '@chakra-ui/layout'

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

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const { q, sort } = query

  const categoryList: CATEGORY[] = await fetcherEntry('api/get-category-list')
  const products: PRODUCT[] = await fetcherEntries('api/products', q, sort)

  return {
    props: {
      categoryList,
      cookies: req.headers.cookie ?? '',
      products,
      q
    }
  }
}

const SearchPage: FC<{
  categoryList: CATEGORY[]
  products: PRODUCT[]
  q: string | string[] | undefined
}> = ({ categoryList, products, q }) => {
  const [pageCount, setPageCount] = useState(0)

  return (
    <Center flexDirection="column" w="full" maxW="1280px">
      {Array.isArray(categoryList)
        ? (
        <>
          <Menu categoryList={categoryList} />
          <Menu categoryList={categoryList} isResponsive />
        </>
          )
        : (
        <MenuSkeleton />
          )}

      <Box as="span" p={2} mb={4} textAlign="center">
        Mostrando {products.length} resultados{' '}
        {q !== undefined && (
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
          {products
            .slice(pageCount, pageCount + PER_PAGE)
            .map((product) => (
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

export default SearchPage
