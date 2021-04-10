import { FC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'

import { Cart, CartItem } from '@/components/common'

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
  return (
    <Wrap>
      <WrapItem>
        <Cart>
          <CartItem products={products} />
        </Cart>
      </WrapItem>
    </Wrap>
  )
}

export default UserBar
