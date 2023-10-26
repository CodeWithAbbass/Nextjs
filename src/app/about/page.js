"use client";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

const About = () => {
  const router = useRouter();
  const Navigate = (link) => {
    router.push(link);
  };
  return (
    <main className={`About ${styles.main}`}>
      <h1>About Page</h1>
      <button onClick={() => Navigate("/")}>Home</button>
    </main>
  );
};

export default About;
