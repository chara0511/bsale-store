import { FC } from 'react'
import { Box, Center, Flex, Heading, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { RoundedButton } from '@/components/button'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'

import { PRODUCT } from '@/assets/models'
import { useCart } from 'context/cart-context'

const CartItem: FC<{ cartProduct: PRODUCT }> = ({ cartProduct }) => {
  const { addProductToCart, decreaseAmount, removeProductFromCart } = useCart()

  const handleAddProductToCart = async (): Promise<PRODUCT[]> => {
    return addProductToCart(cartProduct)
  }

  return (
    <ListItem
      key={cartProduct.id}
      borderBottomWidth="1px"
      borderColor="gray.200"
      borderStyle="solid"
      py={4}
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <Image
          src={cartProduct.url_image}
          fallbackSrc="/noimage.jpg"
          alt={cartProduct.name}
          w="80px"
          h="80px"
          objectFit="cover"
        />
        <Box maxWidth={['150px', '250px']}>
          <Heading
            fontWeight="semibold"
            as="h3"
            size="sm"
            height="48px"
            textAlign="center"
          >
            {cartProduct.name}
          </Heading>

          <Center flexDirection="row">
            <RoundedButton
              size="xs"
              ariaLabel="Decrementar cantidad al producto"
              handler={() => decreaseAmount(cartProduct)}
              icon={<MinusIcon />}
            />

            <Heading
              fontWeight="semibold"
              as="h4"
              size="xs"
              py={1}
              textAlign="center"
              mx={4}
              w="24px"
              height="24px"
              borderRadius="sm"
              userSelect="none"
            >
              {cartProduct.amount}
            </Heading>

            <RoundedButton
              size="xs"
              ariaLabel="Incrementar cantidad al producto"
              handler={handleAddProductToCart}
              icon={<AddIcon />}
            />
          </Center>
        </Box>

        <Box>
          <Heading
            fontWeight={400}
            as="h6"
            size="sm"
            lineHeight="tight"
            isTruncated
          >
            $ {cartProduct.price * cartProduct.amount}
          </Heading>

          <Center mt={6}>
            <RoundedButton
              size="xs"
              ariaLabel="Eliminar producto"
              handler={() => removeProductFromCart(cartProduct)}
              icon={<DeleteIcon />}
            />
          </Center>
        </Box>
      </Flex>
    </ListItem>
  )
}

export default CartItem
