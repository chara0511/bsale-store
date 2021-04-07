/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useEffect } from 'react'
import NextLink from 'next/link'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { ScaleFade } from '@chakra-ui/transition'
import { IconButton } from '@chakra-ui/button'

import { PRODUCT } from '@/assets/models'
import { BagIcon } from '@/components/icons'

const ProductCard: FC<PRODUCT> = ({ id, name, url_image, price }) => {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    onToggle()
  }, [])

  return (
    <Box
      borderWidth="1px"
      overflow="hidden"
      position="relative"
      borderRadius="sm"
    >
      <NextLink href={`/products/${id}`}>
        <Link>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Stack maxW="sm">
              <Image
                src={url_image === '' || url_image === null ? '/noimage.jpg' : url_image}
                fallbackSrc="/loadingimage.png"
                alt={`${name} product`}
                w="260px"
                h="340px"
                objectFit="contain"
                backgroundColor="white"
                _hover={{
                  transform: 'scale(1.10)',
                  transition: 'all .3s ease-in-out'
                }}
              />

              <Flex
                position="absolute"
                flexDirection="column"
                bottom={0}
                w="full"
                color="whiteAlpha.900"
              >
                <Heading
                  as="h3"
                  display="flex"
                  fontWeight="semibold"
                  alignItems="center"
                  backgroundColor="blackAlpha.900"
                  size="md"
                  lineHeight="tight"
                  w="fit-content"
                  h="76px"
                  mt={1}
                  px={4}
                  py={2}
                >
                  {name}
                </Heading>

                <Text
                  fontWeight="semibold"
                  w="fit-content"
                  px={4}
                  py={2}
                  backgroundColor="blackAlpha.900"
                  fontSize="sm"
                  lineHeight="tight"
                >
                  $ {price}
                </Text>
              </Flex>
            </Stack>
          </ScaleFade>
        </Link>
      </NextLink>

      {/* Add product in cart */}
      <IconButton
        aria-label="Agregar al carrito"
        onClick={() => console.log('added')}
        position="absolute"
        top={0}
        right={0}
        backgroundColor="blackAlpha.900"
        borderRadius="none"
        color="whiteAlpha.900"
        variant="ghost"
        _hover={{
          backgroundColor: 'blackAlpha.800'
        }}
        _active={{
          transform: 'scale(0.95)',
          backgroundColor: 'blackAlpha.800'
        }}
        icon={
          <BagIcon fill="none" stroke="currentColor" width="18" height="22" />
        }
      />
    </Box>
  )
}

export default ProductCard
