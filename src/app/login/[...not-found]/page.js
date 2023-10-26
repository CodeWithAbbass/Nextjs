"use client";
import Link from "next/link";
import React from "react";

const LoginNotFound = () => {
  return (
    <div className="Page_Not_Found py-5 text-center">
      <h1>404 | Login Page Not Found</h1>
      <Link href="/">Go To Home Page</Link>
    </div>
  );
};

export default LoginNotFound;
