import { Post } from "@/types/post";
import axios from "axios";


export default async function getPosts() {
    const { data } =  await axios.get('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts');
    data.sort(function(a:Post,b: Post){
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    return data;
  }