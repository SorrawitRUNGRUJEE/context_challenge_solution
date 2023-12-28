import FormAddPost from "./formAddPost";
import Posts from "./posts";



export default function Main({ posts, onAddPost }) {
    return (
      <main>
        <FormAddPost onAddPost={onAddPost} />
        <Posts posts={posts} />
      </main>
    );
  }