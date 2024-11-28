import React from "react";
import styles from "./commanfilter.module.css";
import TableSearch from "../../table/search/TableSearch";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
export default function CommanListFilter() {
  return (
    <div className={styles.flext_sb_container}>
      <div className={styles.left_side}>
        <div className={styles.table_search_wrapper}>
          <TableSearch />
        </div>
      </div>
      <div>
        <ClickTextBtn
          btnText="New Blog"
          disabledBtn={false}
          btnLoading={false}
          size="small"
        />
      </div>
    </div>
  );
}
