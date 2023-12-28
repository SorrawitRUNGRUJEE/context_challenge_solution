import Results from "./results";
import SearchPosts from "./searchPosts";
export default function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
    return (
      <header>
        <div>
          <Results posts={posts} />
          <SearchPosts
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <button onClick={onClearPosts}>Clear posts</button>
        </div>
      </header>
    );
  }