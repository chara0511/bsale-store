import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { PAGINATE } from '@/assets/models'

const Paginator: FC<PAGINATE> = ({ products, pageCount, perPage }) => {
  const handlePageClick = (data: { selected: number }): void => {
    pageCount(data.selected * perPage)
  }

  return (
    <ReactPaginate
        previousLabel="&#8249;"
        nextLabel="&#8250;"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(products?.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pages pagination"
        activeClassName="active"
      />
  )
}

export default Paginator
