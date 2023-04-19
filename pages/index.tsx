import {useEffect, useState} from 'react';
import {
  dehydrate,
  QueryClient,
  useQuery,
} from '@tanstack/react-query'
import { Post } from '@/types/post';
import getPosts from '@/utils/getPosts';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import PaginationButtons from '@/components/UI/PaginationButtons';
import usePagination from '@/hooks/Pagination';
import PostSmall from '@/components/UI/PostSmall';

// const inter = Inter({ subsets: ['latin'] })

const postsPerPage = 5;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isError, isLoading } = useQuery<Post[]>({ queryKey: ['posts'], queryFn: getPosts });
 
  const paginatedData = usePagination(data!, postsPerPage);

  const handlePageClick = (n: number)=>{
    setCurrentPage(n);
    if(paginatedData) {
      paginatedData.pageClick(n);
    }
  };

  
  return (
    <main className="flex flex-grow py-5 w-[90%] md:w-[70%] flex-col items-center justify-center text-black dark:text-white">
      {isLoading && !isError && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {!isError && data && (
        <div className="flex flex-col flex-grow items-center justify-center w-full h-full">
          <div className="flex flex-grow flex-col items-start justify-center w-full gap-y-4">
            {paginatedData!.currentData().map((post) => {
              return <PostSmall key={post.id} post={post} />;
            })}
          </div>
          <PaginationButtons
            pageCount={paginatedData!.totalPages}
            handlePageClick={handlePageClick}
          />
        </div>
      )}
    </main>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], getPosts)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
