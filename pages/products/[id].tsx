import { FC } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import { useEntry } from '@/lib/swr-hooks'
import {
  Product,
  ProductError,
  ProductSkeleton
} from '@/components/common'

const ProductPage: FC = () => {
  const { query }: any = useRouter()

  const { data: product, isLoading } = useEntry('/api/get-product', query.id)

  if (isLoading) {
    return (
      <Center
        my={4}
        flexDirection={['column', 'column', 'row']}
        w="full"
        maxW="1280px"
        position="relative"
      >
        <ProductSkeleton />
      </Center>
    )
  }

  return (
    <Center
      my={4}
      flexDirection={['column', 'column', 'row']}
      w="full"
      maxW="1280px"
      position="relative"
    >
      {Array.isArray(product)
        ? (
        <>
          {product.map((product: PRODUCT) => (
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
