import Link from "next/link";
import styles from "./customeerror.module.css";

export default function AlternativeNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
}
