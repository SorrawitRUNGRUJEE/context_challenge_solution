import { useContext } from "react";
import { PostContext } from "../context/postContext";
export default function Results() {
    const {searchedPosts} = useContext(PostContext)
    return <p>{searchedPosts.length} atomic posts found</p>;
  }