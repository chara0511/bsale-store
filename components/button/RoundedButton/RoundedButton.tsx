import React, { FC, JSXElementConstructor, ReactElement } from 'react'
import { IconButton } from '@chakra-ui/button'

interface Props {
  size?: string
  ariaLabel: string
  handler: () => void
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

const RoundedButton: FC<Props> = ({ size, ariaLabel, handler, icon }) => {
  return (
    <IconButton
      size={size}
      aria-label={ariaLabel}
      onClick={handler}
      borderRadius="none"
      variant="ghost"
      _hover={{
        backgroundColor: 'blackAlpha.200'
      }}
      _active={{
        transform: 'scale(0.95)',
        backgroundColor: 'blackAlpha.200'
      }}
      icon={icon}
    />
  )
}

export default RoundedButton
