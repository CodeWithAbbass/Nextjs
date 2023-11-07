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
      <h1>Single Blog Page</h1>
      <h2>Last Path:- {id}</h2>
      <h2>Path:- {path}</h2>
    </div>
  );
};

export default Post;
