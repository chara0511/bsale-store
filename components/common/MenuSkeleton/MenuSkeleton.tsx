import React, { FC } from 'react'
import { Box, List, ListItem } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const items = ['120px', '80px', '40px', '90px', '70px', '50px', '60px']

const MenuSkeleton: FC = () => {
  return (
    <Box
      position="absolute"
      top={24}
      left={8}
      display={['none', 'none', 'none', 'block']}
    >
      <List spacing={2}>
        <ListItem>
          <Skeleton w="100px" h="28px" />
        </ListItem>

        {items.map((item) => (
          <ListItem key={item}>
            <Skeleton w={item} h="22px" />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default MenuSkeleton
