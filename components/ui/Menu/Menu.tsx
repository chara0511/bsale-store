import { FC, useRef } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Image,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { CATEGORY } from '@/assets/models'
import { CategoryItem, SortItem } from '@/components/items'

const Menu: FC<{
  categoryList: CATEGORY[]
  isResponsive?: boolean
}> = ({
  categoryList,
  isResponsive
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any | undefined>()

  return (
    <>
      {isResponsive ?? false
        ? (
        <>
         {/* MOBILE / TABLET */}
          <IconButton
            position="fixed"
            top={36}
            left={0}
            zIndex={49}
            display={['block', 'block', 'block', 'none']}
            onClick={onOpen}
            variant="solid"
            aria-label="Menu"
            borderRightRadius="full"
            borderWidth="1px"
            borderColor="gray.300"
            borderStyle="solid"
            icon={<HamburgerIcon w="22px" h="22px" />}
          />

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            size="xs"
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontSize="2xl">
                  <NextLink href="/" passHref>
                    <Link
                      display="flex"
                      alignItems="center"
                      fontWeight="medium"
                    >
                      <Image
                        w="84px"
                        h="36px"
                        src="https://dojiw2m9tvv09.cloudfront.net/16738/2/img-logos-web-bsale-naranjo.png?268"
                        alt="Bsale Logo"
                      />
                      <Heading
                        as="h4"
                        size="md"
                        lineHeight="tight"
                        w="fit-content"
                        color="blackAlpha.700"
                        isTruncated
                      >
                        Store
                      </Heading>
                    </Link>
                  </NextLink>
                </DrawerHeader>

                <Divider orientation="horizontal" />

                <DrawerBody>
                  {/* CATEGORIAS */}
                  <CategoryItem categoryList={categoryList} closeMenu={onClose}/>
                  {/* ORDENAR */}
                  <SortItem closeMenu={onClose}/>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
          )
        : (
        <>
          {/* DESKTOP */}
          {/* CATEGORIAS */}
          <Box
            display={['none', 'none', 'none', 'block']}
            position="fixed"
            top={24}
            left={8}
            zIndex={49}
          >
            <CategoryItem categoryList={categoryList} />
          </Box>

          {/* ORDENAR */}
          <Box
            display={['none', 'none', 'none', 'block']}
            position="fixed"
            top={24}
            right={8}
            zIndex={49}
          >
            <SortItem />
          </Box>
        </>
          )}
    </>
  )
}

export default Menu
