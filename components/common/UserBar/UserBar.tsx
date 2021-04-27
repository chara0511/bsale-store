import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'

import { Cart } from '@/components/common'
import { ColorMode } from '@/components/color-mode'
import { MenuItem } from '@/components/items'

const UserBar: FC = () => {
  return (
    <Wrap>
      <WrapItem>
        <Cart />
      </WrapItem>

      <WrapItem>
        <ColorMode />
      </WrapItem>

      <WrapItem>
        <MenuItem />
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
