import React from "react";
import Link from "next/link";
import styles from "./customeerror.module.css";

export default function CustomeErrorUI(props) {
  const { msg = "something went wrong", statusCode = 500 } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{statusCode}</h1>
      <p className={styles.message}>{msg}</p>
      <Link href="/" className={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
}
