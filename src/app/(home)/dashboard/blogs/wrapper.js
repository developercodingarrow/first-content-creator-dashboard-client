"use client";
import React from "react";
import styles from "./wrapper.module.css";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import CommanListFilter from "@/_components/dashbord/elements/filterbars/CommanListFilter";
import DynimicTable from "@/_components/dashbord/table/DynimicTable";
import { tableSampleColumns, tableSampleData } from "@/jsonData/tableData";

export default function BlogListwrapper() {
  const handelBooleanSwitch = (data) => {
    alert(data);
  };

  const handelDelete = (data) => {
    alert(data);
  };
  return (
    <div>
      <div>
        <DashBordListHeader listTitle="Blogs List " />
      </div>
      <div className={styles.content_layout}>
        <div className={styles.fillter_table_wrapper}>
          <div>
            <CommanListFilter />
          </div>
          <div>
            <DynimicTable
              tableColumns={tableSampleColumns}
              tableData={tableSampleData}
              booleanSwithHandel={handelBooleanSwitch}
              handelSingleDelete={handelDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
