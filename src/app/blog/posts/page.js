// "use client";

import Button from "./Button";
import Loading from "./loading";

// ****************************************************************
//                  Client Side Rendering
// ****************************************************************
// import { useEffect, useState } from "react";

// const AllPosts = () => {
//   const [Posts, setPosts] = useState([]);
//   const FetchData = async () => {
//     const Data = await fetch("https://dummyjson.com/posts", {
//       method: "GET",
//       headers: {
//         "Content-Type": "applictaion/json",
//       },
//     });
//     const Res = await Data.json();
//     console.log(Res.posts);
//     setPosts([...Posts, ...Res?.posts]);
//   };
//   useEffect(() => {
//     FetchData();
//   }, []);
//   return (
//     <div>
//       <h1>All Post</h1>
//       <ul>
//         {Posts.map((item, index) => {
//           console.log(item);
//           const { body, id, reactions, title, userId } = item;
//           return <li key={index}>Post Title: {title}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default AllPosts;

// ****************************************************************
//                  Server Side Rendering
// ****************************************************************

const FetchData = async () => {
  const Data = await fetch("https://dummyjson.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "applictaion/json",
    },
  });
  const Res = await Data.json();
  return Res.posts;
};

const AllPosts = async () => {
  const Posts = await FetchData();
  return (
    <div>
      <h1>All Post</h1>
      <ul>
        {Posts.map((item, index) => {
          const { body, id, reactions, title, userId, } = item;
          return (
            <>
              <li key={index}>Post Title: {title}</li>
              <Button userId={userId} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default AllPosts;
