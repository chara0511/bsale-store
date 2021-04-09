import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'

import { Cart } from '@/components/common'

const UserBar: FC = () => {
  return (
    <Wrap>
      <WrapItem>
        <Cart />
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
