"use client";
import Link from "next/link";
import styles from "./page.module.css";
const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/login">Login</Link>
    </main>
  );
};

export default Home;
