import { FC } from 'react'
import { Grid } from '@chakra-ui/layout'

const ProductsGrid: FC = ({ children }) => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={[0, 4, 6]}
    >
      {children}
    </Grid>
  )
}

export default ProductsGrid
