import React, { FC } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link, List, ListItem } from '@chakra-ui/layout'

import { useSearchMeta } from '@/lib/hooks'

interface Props {
  onClose?: () => void
}

const SORT = Object.entries({
  asc: 'Precio: Bajo a alto',
  desc: 'Precio: Alto a bajo'
})

const SortOptions: FC<Props> = ({ onClose }) => {
  const router = useRouter()
  const { asPath } = router
  const { q } = router.query
  const { pathname, category } = useSearchMeta(asPath)

  // * remove this
  console.log({ pathname, category })

  return (
    <List spacing={2}>
      <ListItem
        fontWeight="semibold"
        fontSize="xl"
        textTransform="capitalize"
        lineHeight="tight"
      >
        <NextLink href={{ pathname, query: { q } }}>
          <Link onClick={onClose}>Ordenar</Link>
        </NextLink>
      </ListItem>

      {SORT.map(([key, text]) => (
        <ListItem key={key} textTransform="capitalize" ml={[4, 4, 4, 0]}>
          <NextLink
            href={{
              pathname,
              query: { q, sort: key }
            }}
          >
            <Link onClick={onClose}>{text}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  )
}

export default SortOptions
