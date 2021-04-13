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

import { BagIcon } from '@/components/icons'
import { PrimaryButton, RoundedButton } from '@/components/button'
import { Divider } from '@chakra-ui/layout'

const Cart: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any | undefined>()

  return (
    <>
      <RoundedButton
        ariaLabel="Carrito de compra"
        handler={onOpen}
        icon={
          <BagIcon fill="none" stroke="currentColor" width="18" height="22" />
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
            <DrawerHeader fontSize="2xl">Mi Carrito</DrawerHeader>
            <Divider orientation="horizontal" />

            <DrawerBody>
              {children}
            </DrawerBody>

            <DrawerFooter>
              <PrimaryButton
                name="Procesar Compra"
                handler={() => console.log('Procesar producto para su compra')}
              />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Cart
