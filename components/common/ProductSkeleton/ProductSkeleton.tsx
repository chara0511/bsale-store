import React, { FC } from 'react'
import { Skeleton } from '@chakra-ui/skeleton'
import { Box, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

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
        maxWidth="400px"
      >
        <Skeleton w="380px" h="64px" />

        <Skeleton w="100px" h="48px" />

        <Box>
          <Skeleton h="24px" mb={2} />
          <Skeleton h="24px" mb={2} />
          <Skeleton h="24px" mb={2} />
          <Skeleton w="380px" h="24px" mb={2} />
          <Skeleton w="200px" h="24px" mb={2} />
        </Box>

        <Button
          isDisabled
          w="full"
          mx="auto"
          maxW="300px"
          h="58px"
          borderRadius="sm"
          color="whiteAlpha.900"
          backgroundColor="blackAlpha.900"
          aria-label="Add cart"
        >
          Agregar al Carrito
        </Button>
      </Flex>
    </>
  )
}

export default ProductSkeleton
