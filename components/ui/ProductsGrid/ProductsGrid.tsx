import { FC } from 'react'
import { Grid } from '@chakra-ui/layout'

import { ProductCard } from '@/components/common'

const MyProduct = {
  id: 104,
  name: 'ABSOLUT',
  url_image:
    'https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png',
  price: 8990,
  discount: 30,
  category: 7
}

const ProductsGrid: FC = () => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={[0, 4, 6]}
    >
      <ProductCard {...MyProduct} />
      <ProductCard {...MyProduct} />
      <ProductCard {...MyProduct} />
      <ProductCard {...MyProduct} />
    </Grid>
  )
}

export default ProductsGrid
