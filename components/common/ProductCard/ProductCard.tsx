/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useEffect } from 'react'
import NextLink from 'next/link'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { ScaleFade } from '@chakra-ui/transition'

import { PRODUCT } from '@/assets/models'

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
                src={url_image}
                fallbackSrc="/noimage.jpg"
                alt={`${name} product`}
                w="260px"
                h="340px"
                objectFit="contain"
                backgroundColor="white"
                _hover={{
                  transform: 'scale(1.10)',
                  transition: 'all .3s ease-in-out'
                }}
                _active={{
                  transform: 'scale(0.95)'
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
    </Box>
  )
}

export default ProductCard
