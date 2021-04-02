/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react'
import NextLink from 'next/link'
import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

interface Products {
  id: number
  name: string
  url_image: string
  price: number
  discount: number
  category: number
}

const ProductCard: FC<Products> = ({
  id,
  name,
  url_image,
  price,
  category
}) => {
  return (
    <NextLink href={`/${id}`}>
      <Link
        borderWidth="1px"
        overflow="hidden"
        position="relative"
        borderRadius="sm"
      >
        <Stack maxW="sm">
          <Image
            src={url_image}
            alt={url_image}
            w="300px"
            h="380px"
            objectFit="contain"
            backgroundColor="white"
            _hover={{ transform: 'scale(1.10)', transition: 'all .3s ease-in-out' }}
          />

          <Flex
            position="absolute"
            flexDirection="column"
            bottom={0}
            w="full"
            color="whiteAlpha.900"
          >
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px={2} mx={4} colorScheme="teal">
                {category}
              </Badge>
            </Box>

            <Heading
              fontWeight="semibold"
              as="h4"
              size="md"
              lineHeight="tight"
              w="fit-content"
              mt={1}
              px={4}
              py={2}
              backgroundColor="blackAlpha.900"
              isTruncated
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
              isTruncated
            >
              S/. {price}
            </Text>
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  )
}

export default ProductCard
