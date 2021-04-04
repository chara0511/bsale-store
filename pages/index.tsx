import { FC } from 'react'
import NextLink from 'next/link'
import { Heading } from '@chakra-ui/layout'

import { CATEGORY, PRODUCT } from '@/assets/models'
import { ProductGrid } from '@/components/ui'
import {
  ProductCard,
  ProductError,
  ProductSkeleton
} from '@/components/common'
import { useEntries } from '@/lib/swr-hooks'
import { getCategoryPath } from '@/lib/get-category-path'

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
        <Heading
          fontWeight="semibold"
          as="h4"
          size="md"
          lineHeight="tight"
          mt={1}
          px={4}
          py={2}
          display="flex"
          alignItems="center"
        >
          Categorias
        </Heading>
        {categories.map((category: CATEGORY) => (
          <li key={category.id}>
            <NextLink
              href={{
                pathname: getCategoryPath(category.name)
              }}
            >
              <a>{category.name}</a>
            </NextLink>
          </li>
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
