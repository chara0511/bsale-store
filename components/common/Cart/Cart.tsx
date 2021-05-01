import { FC, useRef } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/modal'
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text
} from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

import { PRODUCT } from '@/assets/models'
import { useCart } from 'context/cart-context'
import { BagIcon } from '@/components/icons'
import { PrimaryButton, RoundedButton } from '@/components/button'
import { CartItem } from '@/components/items'
import {
  calculateDiscount,
  calculateSubTotal,
  getTotalProductsInCart
} from '@/lib/cart'

const Cart: FC = () => {
  const { cartProducts } = useCart()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('gray.200', 'gray.500')
  const btnRef = useRef<any | undefined>()

  return (
    <>
      <RoundedButton
        ariaLabel="Carrito de compra"
        handler={onOpen}
        icon={
          <>
            <BagIcon fill="none" stroke="currentColor" w="22px" h="22px" />
            {cartProducts.length !== 0
              ? (
              <Badge
                borderRadius="full"
                p="1px"
                w="18px"
                h="18px"
                textAlign="center"
                backgroundColor="#FF5C1A"
                position="absolute"
                left={0}
                bottom={0}
              >
                {getTotalProductsInCart(cartProducts)}
              </Badge>
                )
              : null}
          </>
        }
      />

      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            {cartProducts.length === 0
              ? (
              <DrawerBody
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box p={4} backgroundColor={bg} borderRadius="full">
                  <BagIcon
                    fill="none"
                    stroke="currentColor"
                    width="28px"
                    height="28px"
                  />
                </Box>
                <Heading fontWeight="semibold" as="h2" my={4} size="md">
                  Tú carrito esta vacío
                </Heading>
              </DrawerBody>
                )
              : (
              <>
                <DrawerHeader fontSize="2xl">Mi Carrito</DrawerHeader>
                <Divider orientation="horizontal" />
                <DrawerBody display="flex" flexDirection="column">
                  <List spacing={2} flex={1}>
                    {cartProducts.map((cartProduct: PRODUCT) => (
                      <CartItem
                        key={cartProduct.id}
                        cartProduct={cartProduct}
                      />
                    ))}
                  </List>

                  <List
                    py={2}
                    spacing={2}
                    borderY="1px"
                    borderColor="gray.200"
                    borderStyle="solid"
                  >
                    <ListItem display="flex" justifyContent="space-between">
                      <Text as="span" size="sm">
                        Subtotal:
                      </Text>
                      <Text as="span" size="sm">
                        $ {calculateSubTotal(cartProducts)}
                      </Text>
                    </ListItem>

                    <ListItem display="flex" justifyContent="space-between">
                      <Text as="span" size="sm">
                        Descuento:
                      </Text>
                      <Text as="span" size="sm">
                        $ {calculateDiscount(cartProducts)}
                      </Text>
                    </ListItem>

                    <ListItem display="flex" justifyContent="space-between">
                      <Text as="span" size="sm">
                        Envío:
                      </Text>
                      <Text
                        as="span"
                        size="sm"
                        textTransform="uppercase"
                        letterSpacing={2}
                      >
                        gratis
                      </Text>
                    </ListItem>
                  </List>

                  <Flex justifyContent="space-between" pt={2}>
                    <Heading fontWeight="semibold" as="span" size="sm">
                      Total:
                    </Heading>
                    <Heading fontWeight="semibold" as="span" size="sm">
                      $
                      {calculateSubTotal(cartProducts) -
                        calculateDiscount(cartProducts)}
                    </Heading>
                  </Flex>
                </DrawerBody>
                <DrawerFooter>
                  <PrimaryButton
                    name="Procesar Compra"
                    handler={() =>
                      console.log('Procesar producto para su compra')
                    }
                  />
                </DrawerFooter>
              </>
                )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Cart
