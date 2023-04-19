import React from "react";
import { Post } from "@/types/post";
import { BiComment, BiShare, BiLike } from "react-icons/bi";
import Image from "next/image";


import Ppman from '@/public/assets/PPMan.jpg'


interface IProps {
    post: Post
}

const PostSmall = ({post}: IProps) => {
  const authors = post.authors;
  const comments = post.comments;

  return (
    <div className="flex flex-row justify-center items-center w-full h-full p-4 text-sm lg:text-lg rounded-lg bg-slate-300 dark:bg-primaryDark ">
      <div className="flex flex-col justify-center items-center h-full w-1/2 md:w-1/4 px-2 text-center">
        <div className="flex flex-col md:flex-row text-sm font-semibold">
          {authors.map((author) => {
            return (
              <div
                key={author.id}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  width="100"
                  height="100"
                  src={Ppman}
                  alt={author.name}
                  className="rounded-full p-1 m-2 min-w-[5px] min-h-[5px] md:min-w-[50px] md:min-h-[50px]"
                />
                <span>{author.name.split(" ")[0]}</span>
              </div>
            );
          })}
        </div>
        <div className="p-2 text-xs text-slate-700 dark:text-slate-400">
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <div className="flex flex-col w-1/2 md:w-3/4 p-4 rounded-lg bg-slate-200 dark:bg-slate-600 overflow-hidden">
        <div className="flex flex-col p-5 text-center min-h-full w-full overflow-hidden">
          <h1 className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </h1>
          <h2 className="text-sm md:text-lg text-slate-700 dark:text-slate-300">
            {post.description.substring(0, 80) + "..."}
          </h2>
        </div>
        <div className="flex w-full items-center p-2 box-border mt-2 border-t-2 border-primaryLight dark:border-primaryDark text-slate-700 dark:text-slate-300">
          <div className="flex flex-1 justify-center items-center rounded p-1 hover:bg-slate-300 hover:dark:bg-primaryDark hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
            <BiLike className="w-[30px] h-[30px] p-1" />
            <span className="hidden md:block ml-2">Like</span>
          </div>
          <div className="flex flex-1 justify-center items-center rounded p-1 hover:bg-slate-300 hover:dark:bg-primaryDark hover:cursor-pointer hover:scale-105">
            <BiComment className="w-[30px] h-[30px] p-1" />
            {comments.length}
            <span className="hidden md:block ml-2">
              {comments.length === 1 ? "Comment" : "Comments"}
            </span>
          </div>
          <div className="flex flex-1 justify-center items-center rounded p-1 hover:bg-slate-300 hover:dark:bg-primaryDark hover:cursor-pointer hover:scale-105">
            <BiShare className="w-[30px] h-[30px] p-1" />
            <span className="hidden md:block ml-2">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSmall;
