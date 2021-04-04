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
import { Divider, Text } from '@chakra-ui/layout'

import { BagIcon } from '@/components/icons'

const Sidebar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any | undefined>()

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        aria-label="Cart"
        icon={
          <BagIcon fill="none" stroke="currentColor" width="18" height="22" />
        }
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize="2xl">Mi Carrito</DrawerHeader>
            <Divider orientation="horizontal" />

            <DrawerBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>En construcción ...</Text>
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

export default Sidebar
