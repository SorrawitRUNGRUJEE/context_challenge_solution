import List from "./list";
export default function Posts({ posts }) {
    return (
      <section>
        <List posts={posts} />
      </section>
    );
  }
  