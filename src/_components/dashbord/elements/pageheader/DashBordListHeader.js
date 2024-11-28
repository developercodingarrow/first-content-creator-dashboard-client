import React from "react";
import styles from "./dashboardlistheader.module.css";
export default function DashBordListHeader(props) {
  const { listTitle } = props;
  return (
    <div className={styles.container}>
      <div className={styles.left_side}>{listTitle}</div>
      <div>buttons</div>
    </div>
  );
}
