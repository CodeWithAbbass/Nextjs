"use client";
import React from "react";
const Posts = ({ params }) => {
  // Catch All Segments
  return (
    <div className="Posts">
      <h1>Segments</h1>
      <br />
      <h2>This is Called Catch All Segments of Routes</h2>
      <br />
      <h1>URL: {params.posts.join("/")}</h1>
      <h3>
        In This Route We Can Access All Nested Routes after <br />
        http://localhost:3000/blog/ i.e http://localhost:3000/blog/abc/abc/abc
        <br />
        ||
        <br />
        If Route doesn't Exist. it shows AllPosts.
      </h3>
    </div>
  );
};

export default Posts;
