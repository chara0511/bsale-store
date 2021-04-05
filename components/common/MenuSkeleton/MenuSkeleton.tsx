import React, { FC } from 'react'
import { Box, List, ListItem } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const MenuSkeleton: FC = () => {
  return (
    <Box position="absolute" top={4} left={4}>
      <List spacing={2}>
        <ListItem>
          <Skeleton w="100px" h="28px" />
        </ListItem>

        <ListItem>
          <Skeleton w="120px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="80px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="40px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="90px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="70px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="50px" h="22px" />
        </ListItem>

        <ListItem>
          <Skeleton w="60px" h="22px" />
        </ListItem>
      </List>
    </Box>
  )
}

export default MenuSkeleton
