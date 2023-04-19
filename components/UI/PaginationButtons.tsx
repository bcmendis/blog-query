import ReactPaginate from 'react-paginate'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

interface PaginateProps {
  pageCount: number;
  handlePageClick: (n: number) => void;
};

const PaginationButtons = ({ pageCount , handlePageClick }: PaginateProps) => {
    
  return (
    <ReactPaginate
      className="flex flex-row justify-center items-center min-w-[200px] p-2 m-5 gap-x-3 text-purple-600 bg-slate-300/95 dark:bg-primaryDark/95 dark:border-black shadow-lg rounded-full sticky bottom-2"
      breakLabel="..."
      nextLabel={
        <div className="flex justify-center items-center h-10 w-10 md:w-16 md:h-16  rounded-full p-1 hover:bg-purple-600 hover:text-slate-300 hover:dark:bg-purple-400/80 hover:dark:text-primaryDark">
          <BsArrowRight className="h-5 w-5 md:w-10 md:h-10" />
        </div>
      }
      onPageChange={(e) => handlePageClick(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      activeClassName="bg-purple-600 text-slate-300 dark:bg-purple-400/80 dark:text-primaryDark font-bold"
      pageClassName="flex justify-center items-center text-lg md:text-2xl p-4 w-16 h-16 rounded-full hover:bg-purple-600 hover:text-slate-300 hover:dark:bg-purple-400/80 hover:dark:text-primaryDark"
      previousLabel={
        <div className="flex justify-center items-center h-10 w-10 md:w-16 md:h-16  rounded-full p-1 hover:bg-purple-600 hover:text-slate-300 hover:dark:bg-purple-400/80 hover:dark:text-primaryDark">
          <BsArrowLeft className="h-5 w-5 md:w-10 md:h-10" />
        </div>
      }
      renderOnZeroPageCount={null}
    />
  );
}

export default PaginationButtons