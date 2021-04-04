import { FC } from 'react'
import NextLink from 'next/link'
import { Box, List, ListItem } from '@chakra-ui/react'

import { CATEGORY } from '@/assets/models'
import { getCategoryPath } from '@/lib/get-category-path'

const Menu: FC<{ name: string, items: CATEGORY[] }> = ({ name, items }) => {
  return (
    <Box position="absolute" top={4} left={4}>
      <List spacing={2}>
        <ListItem
          fontWeight="semibold"
          fontSize="xl"
          textTransform="capitalize"
          lineHeight="tight"
        >
          <NextLink
            href={{
              pathname: '/search'
            }}
          >
            <a> {name}</a>
          </NextLink>
        </ListItem>

        {items.map((item) => (
          <ListItem key={item.id} textTransform="capitalize">
            <NextLink
              href={{
                pathname: getCategoryPath(item.name)
              }}
            >
              <a> {item.name}</a>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Menu
