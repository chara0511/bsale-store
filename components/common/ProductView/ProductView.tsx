/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import { PRODUCT } from '@/assets/models'
import { Button } from '@chakra-ui/button'

const ProductView: FC<PRODUCT> = ({ name, url_image, price }) => {
  return (
    <>
      <Box borderWidth="1px" overflow="hidden" position="relative">
        <Image
          src={url_image === '' ? '/noimage.jpg' : url_image}
          fallbackSrc="/loadingimage.png"
          alt={`producto ${name}`}
          w="full"
          maxW="300px"
          height="475px"
          objectFit="contain"
          backgroundColor="white"
          _hover={{
            transform: 'scale(1.10)',
            transition: 'all .3s ease-in-out'
          }}
        />
      </Box>

      <Flex
        mx={8}
        flexDirection="column"
        justifyContent="space-around"
        height="475px"
        w="full"
        maxWidth={['400px', '400px', '350px']}
      >
        <Heading
          as="h1"
          display="flex"
          fontWeight="semibold"
          alignItems="center"
          size="lg"
          lineHeight="tight"
          w="fit-content"
        >
          {name}
        </Heading>

        <Heading
          as="h2"
          fontWeight="semibold"
          w="fit-content"
          size="md"
          lineHeight="tight"
          h="48px"
        >
          $ {price}
        </Heading>

        <Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolorem eveniet odio, vel sint quae alias, inventore dolores
            officiis dolorum iste neque. At repudiandae corrupti dolore ipsam
            natus consequatur veritatis?
          </Text>
        </Box>

        <Button
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

export default ProductView