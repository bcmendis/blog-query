import { Dispatch, SetStateAction } from "react";
import { Post } from "./post";

export type Props = {
  children?: React.ReactNode;
};

export type PaginateProps = {
  pageCount: number;
  // handlePageClick: Dispatch<SetStateAction<number>>;
  handlePageClick: (n: number) => void;
};