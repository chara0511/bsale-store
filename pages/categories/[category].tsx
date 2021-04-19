/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import { GetServerSideProps } from 'next'
import { Box, Center, Text } from '@chakra-ui/layout'

import { CATEGORY, PRODUCT } from '@/assets/models'
import {
  MenuSkeleton,
  ProductCard,
  ProductCardSkeleton,
  ProductError
} from '@/components/common'
import { Menu, ProductGrid } from '@/components/ui'
import { fetcherEntries, fetcherEntry } from '@/lib/fetcher'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category, sort } = query
  const categoryList: CATEGORY[] = await fetcherEntry('api/get-category-list')
  const productsByCategory: PRODUCT[] = await fetcherEntries(`api/categories/${String(category)}`, undefined, sort)

  if (productsByCategory.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      category,
      categoryList,
      productsByCategory
    }
  }
}

const CategoryPage: FC<{
  category: string
  categoryList: CATEGORY[]
  productsByCategory: PRODUCT[]
}> = ({ category, categoryList, productsByCategory }) => {
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
        Mostrando {productsByCategory.length} resultados por categoría "
        <Text as="strong" fontWeight="bold" textTransform="capitalize">
          {category}
        </Text>
        "
      </Box>

      {Array.isArray(productsByCategory)
        ? (
        <ProductGrid>
          {productsByCategory.map((product) => (
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
