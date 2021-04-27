import { FC } from 'react'
import NextLink from 'next/link'
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu'
import { ChevronDownIcon } from '@chakra-ui/icons'

const MenuItem: FC = () => {
  return (
    <Menu isLazy>
      <MenuButton
        w="40px"
        h="40px"
        _hover={{
          backgroundColor: 'blackAlpha.200'
        }}
        _active={{
          transform: 'scale(0.95)',
          backgroundColor: 'blackAlpha.200'
        }}
      >
        <ChevronDownIcon w="22px" h="22px" />
      </MenuButton>
      <MenuList zIndex={99} p={2}>
        {/* NextLiink are not rendered unless Menu is open */}
        <NextLink href="https://docs-bsale-store.vercel.app/">
          <a>Documentación</a>
        </NextLink>
      </MenuList>
    </Menu>
  )
}

export default MenuItem
