import { FC } from 'react'
import { Box, Center, Flex, Heading, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { RoundedButton } from '@/components/button'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
// import { Input } from '@chakra-ui/input'

import { PRODUCT } from '@/assets/models'
import { useCart } from 'context/cart-context'
import { addToCart } from '@/lib/cart'

const CartItem: FC<{ cartProduct: PRODUCT }> = ({ cartProduct }) => {
  const { addProductToCart, removeProductFromCart } = useCart()
  /* const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)

    if (Number.isInteger(val) && val >= 0) {
      console.log(Number(e.target.value))
    }
  } */
  const handleAddProductToCart = async (): Promise<PRODUCT[]> => {
    const product = await addToCart(cartProduct.id)
    return addProductToCart(...product)
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
          <Box maxWidth="240px">
            <Heading
              fontWeight="semibold"
              as="h3"
              size="sm"
              height="48px"
              isTruncated
            >
              {cartProduct.name}
            </Heading>

            <Center flexDirection="row">
              <RoundedButton
                size="xs"
                ariaLabel="Decrementar cantidad al producto"
                handler={() => console.log('- quantity')}
                icon={<MinusIcon />}
              />

              {/* <Input
                    id="cantidad"
                    value={cartProduct.amount}
                    size="xs"
                    p={0}
                    mx={4}
                    maxW="30px"
                    borderRadius="sm"
                    variant="filled"
                    type="number"
                    max={99}
                    min={0}
                    textAlign="center"
                 /> */}

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
              $ {(cartProduct.price * cartProduct.amount)}
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
