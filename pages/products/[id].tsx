import { FC } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/layout'

const ProductPage: FC = () => {
  const { query } = useRouter()

  console.log(query)
  return (
    <Center flexDirection="column" w="full" maxW="1280px" position="relative">
      from ProductPage.tsx
    </Center>
  )
}

export default ProductPage
