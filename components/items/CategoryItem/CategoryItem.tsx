import { FC } from 'react'
import NextLink from 'next/link'
import { Link, List, ListItem } from '@chakra-ui/layout'

import { CATEGORY } from '@/assets/models'
import { getCategoryPath } from '@/lib/get-category-path'

const CategoryItem: FC<{
  categoryList: CATEGORY[]
  closeMenu?: () => void
}> = ({ categoryList, closeMenu }) => {
  return (
    <>
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
            <Link onClick={closeMenu}>Categorias</Link>
          </NextLink>
        </ListItem>

        {categoryList.map((cat) => (
          <ListItem key={cat.id} textTransform="capitalize" ml={[4, 4, 4, 0]}>
            <NextLink
              href={{
                pathname: getCategoryPath(cat.name)
              }}
            >
              <Link onClick={closeMenu}>{cat.name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default CategoryItem
