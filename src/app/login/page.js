import Link from "next/link";
import styles from "../page.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <h1>Default Login Page</h1>
      <Link href="/">Home</Link>
      <Link href="/login/admin">Admin Login</Link>
      <Link href="/login/user">User Login</Link>
    </main>
  );
};

export default Login;
