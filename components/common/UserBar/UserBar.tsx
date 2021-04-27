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

      <WrapItem>
        <RoundedButton
          ariaLabel="Toggle"
          handler={toggleColorMode}
          icon={
            colorMode === 'light'
              ? (
              <MoonIcon width="18" height="22"/>
                )
              : (
              <SunIcon width="18" height="22" />
                )
          }
        />
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
