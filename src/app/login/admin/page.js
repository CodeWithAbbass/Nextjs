import Link from "next/link";

const Admin = () => {
  return (
    <div className="Admin">
      <h1>Admin</h1>
      <Link href="/login" >Back to Login</Link>
    </div>
  );
};

export default Admin;
