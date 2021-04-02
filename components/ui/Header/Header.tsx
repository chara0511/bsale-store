import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'

import { SearchBar, UserBar } from '@/components/common'
import { Image } from '@chakra-ui/image'

const Header: FC = () => {
  return (
    <Stack
      position="relative"
      backgroundColor="whiteAlpha.50"
      px={4}
      w="full"
      boxShadow="sm"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1100px"
        margin="0 auto"
        w="full"
        h="60px"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center" fontWeight="medium">
              <Image
                w="84px"
                h="36px"
                src="https://dojiw2m9tvv09.cloudfront.net/16738/2/img-logos-web-bsale-naranjo.png?268"
                alt="Bsale Logo"
              />
              <Heading
                as="h4"
                size="md"
                lineHeight="tight"
                w="fit-content"
                color="blackAlpha.700"
                isTruncated
              >
                Store
              </Heading>
            </Link>
          </NextLink>
        </Box>

        <SearchBar />

        <UserBar />
      </Flex>
    </Stack>
  )
}

export default Header
