export type Props = {
  children?: React.ReactNode;
};

export type PaginateProps = {
  pageCount: number;
  handlePageClick: (n: number) => void;
};