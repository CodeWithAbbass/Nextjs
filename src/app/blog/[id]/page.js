"use client";

import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
// This is for Dynamic Route.
const Post = ({ params }) => {
  const router = useRouter();
  const path = usePathname();
  const { id } = useParams(); // We can use useParams() or destructuring from component i.e const Post ({params})=>{}
  console.log("ID: ", id, "Params: ", params);
  return (
    <div>
      <h1>Blog</h1> <h2>pathname:- {router.pathname}</h2>
      <h2>query:- {router.query}</h2>
      <h2>asPath:- {router.asPath}</h2>
      <h2>Path:- {path}</h2>
    </div>
  );
};

export default Post;
