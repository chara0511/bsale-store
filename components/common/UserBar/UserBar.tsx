import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { Cart, CartItem } from '@/components/common'
import { RoundedButton } from '@/components/button'

const products = [
  {
    category: 1,
    discount: 20,
    id: 5,
    name: 'ENERGETICA MR BIG',
    price: 1490,
    url_image:
      'https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg'
  },
  {
    category: 1,
    discount: 20,
    id: 6,
    name: 'ENERGETICA MR BIG',
    price: 1490,
    url_image:
      'https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg'
  }
]

const UserBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Wrap>
      <WrapItem>
        <Cart>
          <CartItem products={products} />
        </Cart>
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
