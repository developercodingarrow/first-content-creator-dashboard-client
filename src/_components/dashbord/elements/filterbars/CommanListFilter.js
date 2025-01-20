"use client";
import React, { useEffect, useContext } from "react";
import styles from "./commanfilter.module.css";
import TableSearch from "../../table/search/TableSearch";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import DateFillter from "../../table/dateFillter/DateFillter";
import DateFillterModel from "@/_components/models/DateFillterModel";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
export default function CommanListFilter(props) {
  const { data, serachPlacholder, searchFiled } = props;
  const {
    isMobileDateModel,
    handelOpenMobileDateModel,
    handelCloseMobileDateModel,
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
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandel={searchByTableFiled}
              searchFiled={searchFiled}
              placholder={serachPlacholder}
            />
          </div>
          <div className={styles.date_element_wrapper}>
            <DateFillter handelDateRange={filterByDate} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
