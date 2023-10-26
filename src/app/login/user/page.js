import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <div className="User">
      <h1>User</h1>
      <Link href="/login">Back to Login</Link>
    </div>
  );
};

export default User;
