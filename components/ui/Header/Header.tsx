import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'

import { SearchBar, UserBar } from '@/components/common'
import { Image } from '@chakra-ui/image'

const Header: FC = () => {
  return (
    <Stack
      as="header"
      position="fixed"
      zIndex={99}
      alignItems="center"
      backgroundColor="white"
      w="full"
      boxShadow="sm"
      px={4}
      py={2}
    >
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        maxW="1280px"
        margin="0 auto"
        w="full"
        h={['40px', '50px', '60px']}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center" fontWeight="medium">
              <Image
                w="84px"
                h="36px"
                src="/logo.png"
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

      <SearchBar isResponsive />
    </Stack>
  )
}

export default Header
