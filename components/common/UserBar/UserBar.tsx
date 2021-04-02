import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'

import { BagIcon } from '@/components/icons'

const UserBar: FC = () => {
  return (
    <Wrap>
      <WrapItem>
        <IconButton
          variant="ghost"
          aria-label="Cart"
          icon={
            <BagIcon fill="none" stroke="currentColor" width="18" height="22" />
          }
        />
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
