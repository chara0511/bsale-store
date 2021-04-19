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
        <Box
          w={['325px', '400px', '450px', '500px']}
          borderWidth="1px"
          overflow="hidden"
          position="relative"
          backgroundColor="white"
        >
          <Image
            src={url_image}
            fallbackSrc="/noimage.jpg"
            alt={`producto ${name}`}
            w="full"
            maxW="300px"
            height="475px"
            m="auto"
            objectFit="contain"
            transform= 'scale(1.10)'
          />
        </Box>
      </Fade>

      <Flex
        mx={8}
        flexDirection="column"
        justifyContent="space-around"
        height="475px"
        w="full"
        maxWidth={['325px', '400px', '450px', '500px']}
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
