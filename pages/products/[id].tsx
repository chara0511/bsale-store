import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import { fetcherEntries, fetcherEntry } from '@/lib/swr-hooks'
import { Product, ProductError, ProductSkeleton } from '@/components/common'

// Page with dynamic routes, getStaticPaths only runs at build time on server-side.
// => https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths: GetStaticPaths = async () => {
  const products: PRODUCT[] = await fetcherEntries('api/products')

  // Get the paths we want to pre-render based on products conditionally.
  const paths = Array.isArray(products)
    ? products.map((product) => ({
      params: { id: String(product.id) }
    }))
    : [
        {
          params: { id: '5' }
        }
      ]

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// getStaticProps gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
// => https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product: PRODUCT[] = await fetcherEntry(`api/products/${String(params?.id)}`)

  return {
    props: {
      product
    }
  }
}

const ProductPage: FC<{ product: PRODUCT[] }> = ({ product }) => {
  return (
    <Center
      w="full"
      my={4}
      flexDirection={['column', 'column', 'row']}
      maxW="1280px"
      position="relative"
    >
      {Array.isArray(product)
        ? (
        <>
          {product.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </>
          )
        : (
        <>
          <ProductError {...product} />
          <ProductSkeleton />
        </>
          )}
    </Center>
  )
}

export default ProductPage
