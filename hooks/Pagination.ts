import React, { useState } from "react";
import { Post } from "@/types/post";

function usePagination(data: Post[], postsPerPage:number) {
  const [currentPage, setCurrentPage] = useState(1);
  
  if (data === undefined) {
    return null
  }

  const totalPages = Math.ceil(data!.length / postsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * postsPerPage;
    const end = begin + postsPerPage;
    return data!.slice(begin, end);
  }

  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function pageClick(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, totalPages));
  }

  return {
    nextPage,
    prevPage,
    pageClick,
    currentData,
    currentPage,
    totalPages,
  };
}

export default usePagination;
