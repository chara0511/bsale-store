import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
import { Center } from '@chakra-ui/layout'

import { PRODUCT } from '@/assets/models'
import { ProductGrid } from '@/components/ui'
import {
  ProductCard,
  ProductError,
  ProductSkeleton
} from '@/components/common'
import { useEntries } from '@/lib/swr-hooks'

const PER_PAGE: number = 15

const IndexPage: FC = () => {
  const router = useRouter()
  const { q, sort }: any = router.query

  const { data: products, isLoading } = useEntries('/api/get-products', q, sort)

  const [pageCount, setPageCount] = useState(0)

  const handlePageClick = (data: { selected: number }): void => {
    setPageCount(data.selected * PER_PAGE)
  }

  if (isLoading) {
    return (
      <ProductGrid>
        <ProductSkeleton />
      </ProductGrid>
    )
  }

  return (
    <Center w="full" maxW="1280px" flexDirection="column">
      {Array.isArray(products)
        ? (
        <ProductGrid>
          {products
            .slice(pageCount, pageCount + PER_PAGE)
            .map((product: PRODUCT) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </ProductGrid>
          )
        : (
        <>
          <ProductError {...products} />
          <ProductGrid>
            <ProductSkeleton />
          </ProductGrid>
        </>
          )}

      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(products?.length / PER_PAGE)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pages pagination"
        activeClassName="active"
      />
    </Center>
  )
}

export default IndexPage
