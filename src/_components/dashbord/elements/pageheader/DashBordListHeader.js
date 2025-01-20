import React from "react";
import styles from "./dashboardlistheader.module.css";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
export default function DashBordListHeader(props) {
  const { listTitle, exporthandel } = props;
  return (
    <div className={styles.container}>
      <div className={""}>
        <h2>{listTitle}</h2>
      </div>
      <div>
        <ClickTextBtn
          btnText="Export"
          size="small"
          clickHandel={exporthandel}
        />
      </div>
    </div>
  );
}
