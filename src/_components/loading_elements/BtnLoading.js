import React from "react";
import styles from "./css/loading.module.css";
export default function BtnLoading(props) {
  const { spinerSize = "medium" } = props;
  return (
    <div className={styles.btnLoadingContainer}>
      <div className={`${styles.spinner} ${styles[spinerSize]}`}></div>
    </div>
  );
}
