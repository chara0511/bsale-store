import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { Cart } from '@/components/common'
import { ColorMode } from '@/components/color-mode'
import { MenuItem } from '@/components/items'

const UserBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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
