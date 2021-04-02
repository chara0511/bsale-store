import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Link, Stack } from '@chakra-ui/layout'

import { SearchBar, UserBar } from '@/components/common'

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
            <Link fontWeight="medium">
              BSale Store <small>test</small>
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
