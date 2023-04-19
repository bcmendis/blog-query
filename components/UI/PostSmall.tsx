import React from "react";
import { Post } from "@/types/post";
import { BiComment } from "react-icons/bi";
import Image from "next/image";


import Ppman from '@/public/assets/PPMan.jpg'


interface IProps {
    post: Post
}

const PostSmall = ({post}: IProps) => {
  const authors = post.authors;
  const comments = post.comments;

  return (
    <div className="flex flex-col justify-center items-center w-full p-2 text-lg rounded-lg bg-primaryLight dark:bg-primaryDark ">
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-1/4">
          {authors.map((author) => {
            return (
              <Image
                width="100"
                height="100"
                key={author.id}
                src={Ppman}
                alt={author.name}
                className="rounded-full m-2"
              />
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center w-3/4">
          <h1>{post.title}</h1>
          <h2>{post.description.substring(0, 80) + "..."}</h2>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <BiComment />
        {comments.length}
      </div>
    </div>
  );
};

export default PostSmall;
