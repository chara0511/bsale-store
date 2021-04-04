/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import {
  Menu,
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

  const { data: products, isLoading: porductsFilteredLoading } = useEntries(
    '/api/get-products',
    q
  )
  const { data: categories, isLoading: categoriesLoading } = useEntries(
    '/api/get-categories'
  )

  console.log({ asPath, pathname, category })

  if (porductsFilteredLoading || categoriesLoading) {
    return (
      <>
        {q && (
          <Box as="span" p={2} mb={2}>
            Buscando: "<strong>{q}</strong>"
          </Box>
        )}
        <ProductGrid>
          <ProductSkeleton />
        </ProductGrid>
      </>
    )
  }

  return (
    <Center flexDirection="column" w="full" maxW="1280px" position="relative">
      <Box as="span" p={2} mb={2}>
        Mostrando {products.length} resultados{' '}
        {q && (
          <>
            para "<strong>{q}</strong>"
          </>
        )}
      </Box>

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

export default SearchPage
