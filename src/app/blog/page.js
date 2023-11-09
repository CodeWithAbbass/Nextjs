import Link from "next/link";

// Static MetaData
export const metadata = {
  title: "Learning Next Js | Blog",
  description: "Blog Description",
};

const Blog = ({ params }) => {
  return (
    <div>
      {/* <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}

      <h1>Blog Common Layout</h1>

      <Link href="/blog/posts">All Blogs Page</Link>
      <br />
      <br />
      <Link href="/blog/1">Single Blog Page</Link>
    </div>
  );
};

export default Blog;

// export const generateMetadata = ({ params }) => {
//   return { title: "Blog Page", description: "Blog Page Description" };
// };
