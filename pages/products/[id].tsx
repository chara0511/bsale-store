import { FC } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/layout'

import { useEntry } from '@/lib/swr-hooks'
import {
  ProductError,
  ProductSkeleton,
  ProductView
} from '@/components/common'
import { PRODUCT } from '@/assets/models'

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

  console.log(product)
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
            <ProductView key={product.id} {...product} />
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
