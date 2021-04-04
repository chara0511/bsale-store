import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'

import { Sidebar } from '@/components/ui'

const UserBar: FC = () => {
  return (
    <Wrap>
      <WrapItem>
        <Sidebar />
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
