import ReactPaginate from 'react-paginate'
// import {PaginateProps} from '@/types/props'


interface PaginateProps {
  pageCount: number;
  handlePageClick: (n: number) => void;
};

const PaginationButtons = ({ pageCount , handlePageClick }: PaginateProps) => {
    
  return (
    <ReactPaginate
    className='flex flex-row justify-evenly items-center min-w-[200px] w-[60%] p-2 h-20 m-5 bg-primaryLight dark:bg-primaryDark shadow-lg rounded-full sticky bottom-2'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(e) => handlePageClick(e.selected+1)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
  )
}

export default PaginationButtons