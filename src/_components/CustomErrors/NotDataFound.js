import React from "react";
import Link from "next/link";
import styles from "./customeerror.module.css";
export default function NotDataFound(props) {
  const { msg = "No Content Found" } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>204 </h1>
      <p className={styles.message}>{msg}</p>
      <Link href="/" className={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
}
