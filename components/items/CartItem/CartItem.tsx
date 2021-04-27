import { FC } from 'react'
import { Box, Center, Flex, Heading, List, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { RoundedButton } from '@/components/button'
import { FormLabel } from '@chakra-ui/form-control'
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'

import { PRODUCT } from '@/assets/models'

const CartItem: FC<{ products: PRODUCT[] }> = ({ products }) => {
  return (
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
                <RoundedButton
                  size="xs"
                  ariaLabel="Decrementar cantidad al producto"
                  handler={() => console.log('- quantity')}
                  icon={<MinusIcon />}
                />

                <FormLabel htmlFor="cantidad" size="xs" my={0} mx={4}>
                  <Input
                    id="cantidad"
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

                <RoundedButton
                  size="xs"
                  ariaLabel="Incrementar cantidad al producto"
                  handler={() => console.log('+ quantity')}
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
                <RoundedButton
                  size="xs"
                  ariaLabel="Eliminar producto"
                  handler={() => console.log('remove item')}
                  icon={<DeleteIcon />}
                />
              </Center>
            </Box>
          </Flex>
        </ListItem>
      ))}
    </List>
  )
}

export default CartItem
