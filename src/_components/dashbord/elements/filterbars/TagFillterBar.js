"use client";
import React, { useEffect, useContext } from "react";
import styles from "./commanfilter.module.css";
import TableSearch from "../../table/search/TableSearch";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
export default function TagFillterBar(props) {
  const { data } = props;
  const {
    isCreateInputModel,
    handelOpenCreateInputModel,
    handelCloseCreateInputModel,
  } = useContext(ModelsContext);

  const { updateVisibleRows, searchByTableFiled, filterByDate } =
    useTableFillters(data);

  useEffect(() => {
    updateVisibleRows(data);
  }, [data]);

  return (
    <div className={styles.flext_sb_container}>
      <div className={styles.left_side}>
        <div className={styles.table_search_wrapper}>
          <TableSearch
            searchHandel={searchByTableFiled}
            searchFiled="tagName"
            placholder="Search tags.."
          />
        </div>
      </div>
      <div>
        <ClickTextBtn
          btnText="New Blog"
          disabledBtn={false}
          btnLoading={false}
          size="small"
          clickHandel={handelOpenCreateInputModel}
        />
      </div>
    </div>
  );
}
