import { useContext } from "react";
import { PostContext } from "../context/postContext";

export default function List() {
    const {searchedPosts} = useContext(PostContext)
    return (
      <ul>
        {searchedPosts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }