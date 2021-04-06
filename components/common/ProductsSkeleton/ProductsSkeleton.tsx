import { FC } from 'react'
import { Skeleton } from '@chakra-ui/skeleton'

const items = [1, 2, 3, 4, 5, 6]

const ProductsSkeleton: FC = () => {
  return (
    <>
      {items.map((item) => (
        <Skeleton
          key={item}
          borderWidth="1px"
          overflow="hidden"
          position="relative"
          borderRadius="sm"
          w="260px"
          height="340px"
        />
      ))}
    </>
  )
}

export default ProductsSkeleton
