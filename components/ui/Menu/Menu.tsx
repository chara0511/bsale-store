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
  List,
  ListItem,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { CATEGORY } from '@/assets/models'
import { SortOptions } from '@/components/common'
import { getCategoryPath } from '@/lib/get-category-path'

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
            zIndex={99}
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
                  <List spacing={2} mt={4}>
                    <ListItem
                      fontWeight="semibold"
                      fontSize="xl"
                      textTransform="capitalize"
                      lineHeight="tight"
                    >
                      <NextLink
                        href={{
                          pathname: '/search'
                        }}
                      >
                        <Link onClick={onClose}>Categorias</Link>
                      </NextLink>
                    </ListItem>

                    {categoryList.map((cat) => (
                      <ListItem key={cat.id} textTransform="capitalize" ml={4}>
                        <NextLink
                          href={{
                            pathname: getCategoryPath(cat.name)
                          }}
                        >
                          <Link onClick={onClose}> {cat.name}</Link>
                        </NextLink>
                      </ListItem>
                    ))}
                  </List>

                  {/* ORDENAR */}
                  <SortOptions closeMenu={onClose}/>
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
            zIndex={99}
          >
            <List spacing={2} mt={4}>
              <ListItem
                fontWeight="semibold"
                fontSize="xl"
                textTransform="capitalize"
                lineHeight="tight"
              >
                <NextLink
                  href={{
                    pathname: '/search'
                  }}
                >
                  <Link>Categorias</Link>
                </NextLink>
              </ListItem>

              {categoryList.map((cat) => (
                <ListItem key={cat.id} textTransform="capitalize" ml={[4, 4, 4, 0]}>
                  <NextLink
                    href={{
                      pathname: getCategoryPath(cat.name)
                    }}
                  >
                    <Link> {cat.name}</Link>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* ORDENAR */}
          <Box
            display={['none', 'none', 'none', 'block']}
            position="fixed"
            top={24}
            right={8}
            zIndex={99}
          >
            <SortOptions />
          </Box>
        </>
          )}
    </>
  )
}

export default Menu
