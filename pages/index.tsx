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
import PaginationButtons from '@/components/PaginationButtons';

// const inter = Inter({ subsets: ['latin'] })
//test

const postsPerPage = 5;

export default function Home() {
  const [page, setPage] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageRange, setPageRange] = useState<number>(0);

  const { data } = useQuery<Post[]>({ queryKey: ['posts'], queryFn: getPosts });
  
  useEffect(() => { 
    if (data) {
      setPageRange(Math.ceil(data.length / postsPerPage));
      setPage(data?.slice(currentPage, (currentPage)+postsPerPage));
    }
  }, [data])

  useEffect(() => {
    if (data) {
      setPage(data?.slice(currentPage*postsPerPage, (currentPage*postsPerPage)+postsPerPage));
    }
  }, [currentPage])
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-start justify-center w-full'>
        List Length: {data?.length}
        Current Page: {currentPage}
        {page?.map(post => {
          return (
          <div key={post.id}>
          <b>{post.id}</b>
          {post.title}:   
          {post.createdAt}
          </div>
          )
        })}
        <PaginationButtons pageCount={pageRange} handlePageClick={setCurrentPage}/>
      </div>
    </main>
  )
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
