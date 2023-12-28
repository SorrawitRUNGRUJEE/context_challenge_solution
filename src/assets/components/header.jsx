import Results from "./results";
import SearchPosts from "./searchPosts";
import { useContext } from "react";
import { PostContext } from "../context/postContext";
export default function Header() {
    const {handleClearPosts} = useContext(PostContext)
    return (
      <header>
        <div>
          <Results />
          <SearchPosts/>
          <button onClick={handleClearPosts}>Clear posts</button>
        </div>
      </header>
    );
  }