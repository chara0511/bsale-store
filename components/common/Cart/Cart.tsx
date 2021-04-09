import { FC, useRef } from 'react'
import { Button, IconButton } from '@chakra-ui/button'
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
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  List,
  ListItem
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { FormLabel } from '@chakra-ui/form-control'

import { BagIcon } from '@/components/icons'

const products = [
  {
    category: 1,
    discount: 20,
    id: 5,
    name: 'ENERGETICA MR BIG',
    price: 1490,
    url_image:
      'https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg'
  }
]

const Cart: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any | undefined>()

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        aria-label="Carrito de compra"
        icon={
          <BagIcon fill="none" stroke="currentColor" width="18" height="22" />
        }
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize="2xl">Mi Carrito</DrawerHeader>
            <Divider orientation="horizontal" />

            <DrawerBody>
              <List spacing={2} mt={4}>
                {products.map((product) => (
                  <ListItem
                    key={product.id}
                    borderBottomWidth="1px"
                    borderColor="gray.200"
                    borderStyle="solid"
                    py={4}
                  >
                    <Flex flexDirection="row" justifyContent="space-between">
                      <Image
                        src={product.url_image}
                        alt={product.name}
                        w="80px"
                        h="80px"
                        objectFit="cover"
                      />
                      <Box>
                        <Heading
                          fontWeight="semibold"
                          as="h5"
                          size="sm"
                          lineHeight="tight"
                          isTruncated
                        >
                          {product.name}
                        </Heading>

                        <Center flexDirection="row" mt={4}>
                          <IconButton
                            aria-label="Decrementar cantidad al producto"
                            onClick={() => console.log('- quantity')}
                            size="xs"
                            backgroundColor="blackAlpha.900"
                            borderRadius="none"
                            color="whiteAlpha.900"
                            variant="ghost"
                            _hover={{
                              backgroundColor: 'blackAlpha.800'
                            }}
                            _active={{
                              transform: 'scale(0.95)',
                              backgroundColor: 'blackAlpha.800'
                            }}
                            icon={<MinusIcon />}
                          />

                          <FormLabel htmlFor="cantidad" size="xs" my={0} mx={4}>
                            <Input
                              id="cantidad"
                              value={1}
                              size="xs"
                              p={0}
                              m={0}
                              maxW="30px"
                              borderRadius="sm"
                              variant="filled"
                              type="number"
                              max={99}
                              min={0}
                              textAlign="center"
                            />
                          </FormLabel>

                          <IconButton
                            aria-label="Incrementar cantidad al producto"
                            onClick={() => console.log('+ quantity')}
                            size="xs"
                            backgroundColor="blackAlpha.900"
                            borderRadius="none"
                            color="whiteAlpha.900"
                            variant="ghost"
                            _hover={{
                              backgroundColor: 'blackAlpha.800'
                            }}
                            _active={{
                              transform: 'scale(0.95)',
                              backgroundColor: 'blackAlpha.800'
                            }}
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
                          $ {product.price}
                        </Heading>

                        <Center mt={4}>
                          <IconButton
                            aria-label="Eliminar producto"
                            onClick={() => console.log('remove item')}
                            size="xs"
                            backgroundColor="blackAlpha.900"
                            borderRadius="none"
                            color="whiteAlpha.900"
                            variant="ghost"
                            _hover={{
                              backgroundColor: 'blackAlpha.800'
                            }}
                            _active={{
                              transform: 'scale(0.95)',
                              backgroundColor: 'blackAlpha.800'
                            }}
                            icon={<DeleteIcon />}
                          />
                        </Center>
                      </Box>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme="blue">Comprar</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Cart
