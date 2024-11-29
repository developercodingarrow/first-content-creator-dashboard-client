import React from "react";
import styles from "./css/tableelements.module.css";
export default function TableBooleanStatus(props) {
  const { data } = props;
  return (
    <div>
      <span
        className={`${styles.status} tiny_normall_text ${
          data ? styles.active : styles.pending
        }  `}
      >
        {data ? "verfified" : "pending"}
      </span>
    </div>
  );
}
