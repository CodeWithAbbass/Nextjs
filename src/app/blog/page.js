import Link from "next/link";

const Blog = ({ params }) => {
  return (
    <div>
      <h1>Blog Common Layout</h1>

      <Link href="/blog/posts">All Blogs Page</Link>
      <br />
      <br />
      <Link href="/blog/1">Single Blog Page</Link>
    </div>
  );
};

export default Blog;
