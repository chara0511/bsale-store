import React, { FC } from 'react'
import { Skeleton } from '@chakra-ui/skeleton'
import { Box, Flex } from '@chakra-ui/layout'

import { PrimaryButton } from '@/components/button'

const ProductSkeleton: FC = () => {
  return (
    <>
      <Skeleton
        borderWidth="1px"
        overflow="hidden"
        position="relative"
        borderRadius="sm"
        w="full"
        maxW="300px"
        height="475px"
      />

      <Flex
        mx={8}
        flexDirection="column"
        justifyContent="space-around"
        height="475px"
        w="full"
        maxWidth={['400px', '400px', '300px', '350px']}
      >
        <Skeleton w="320px" h="64px" />

        <Skeleton w="100px" h="48px" />

        <Box>
          <Skeleton h="24px" mb={2} />
          <Skeleton h="24px" mb={2} />
          <Skeleton h="24px" mb={2} />
          <Skeleton w="320px" h="24px" mb={2} />
          <Skeleton w="200px" h="24px" mb={2} />
        </Box>

        <PrimaryButton
          isDisabled
          name="Agregar al Carrito"
          handler={() => console.log('Agregar producto al carrito')}
        />
      </Flex>
    </>
  )
}

export default ProductSkeleton
