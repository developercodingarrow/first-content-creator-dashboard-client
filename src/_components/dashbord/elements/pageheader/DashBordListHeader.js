import React from "react";
import styles from "./dashboardlistheader.module.css";
export default function DashBordListHeader(props) {
  const { listTitle } = props;
  return (
    <div className={styles.container}>
      <div className={""}>
        <h2>{listTitle}</h2>
      </div>
      <div>buttons</div>
    </div>
  );
}
