import { createContext,useState } from "react";
import { faker } from "@faker-js/faker";
export const PostContext = createContext()

export default function PostContextProvider({children}){
    function createRandomPost() {
        return {
          title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          body: faker.hacker.phrase(),
        };
      }

      const [posts, setPosts] = useState(() =>
      Array.from({ length: 20 }, () => createRandomPost())
    );
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchedPosts =
      searchQuery.length > 0
        ? posts.filter((post) =>
            `${post.title} ${post.body}`
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        : posts;
  
    function handleAddPost(post) {
      setPosts((posts) => [post, ...posts]);
    }
  
    function handleClearPosts() {
      setPosts([]);
    }
    const value ={searchedPosts,handleClearPosts,searchQuery,setSearchQuery
    ,handleAddPost}
    return <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>

}