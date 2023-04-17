import ReactPaginate from 'react-paginate'
import {PaginateProps} from '@/types/props'

const PaginationButtons = ({ pageCount , handlePageClick }: PaginateProps) => {
    
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => handlePageClick(e.selected)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  )
}

export default PaginationButtons