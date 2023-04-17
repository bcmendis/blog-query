import { Dispatch, SetStateAction } from "react";

export type PaginateProps = {
    pageCount: number;
    handlePageClick: Dispatch<SetStateAction<number>>;
  }