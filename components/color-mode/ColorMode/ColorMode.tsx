import React, { FC } from 'react'

import { RoundedButton } from '@/components/button'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/color-mode'

const ColorMode: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {colorMode === 'light'
        ? (
          <RoundedButton
            ariaLabel="Switch a modo oscuro"
            handler={toggleColorMode}
            icon={<MoonIcon w="22px" h="22px" />}
          />
          )
        : (
          <RoundedButton
            ariaLabel="Switch a modo claro"
            handler={toggleColorMode}
            icon={<SunIcon w="22px" h="22px" />}
          />
          )}
    </>
  )
}

export default ColorMode
