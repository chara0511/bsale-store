/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useEffect } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import { PRODUCT } from '@/assets/models'
import { useDisclosure } from '@chakra-ui/hooks'
import { Fade } from '@chakra-ui/transition'

import { PrimaryButton } from '@/components/button'

const Product: FC<PRODUCT> = ({ name, url_image, price }) => {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    onToggle()
  }, [])

  return (
    <>
      <Fade in={isOpen}>
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
      </Fade>

      <Flex
        mx={8}
        flexDirection="column"
        justifyContent="space-around"
        height="475px"
        w="full"
        maxWidth={['400px', '400px', '300px', '350px']}
      >
        <Heading
          as="h1"
          display="flex"
          fontWeight="bold"
          alignItems="center"
          size="lg"
          lineHeight="tight"
          w="fit-content"
        >
          {name}
        </Heading>

        <Heading
          as="h2"
          fontWeight="bold"
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

        <PrimaryButton
          name="Agregar al Carrito"
          handler={() => console.log('Agregar producto al carrito')}
        />
      </Flex>
    </>
  )
}

export default Product
