"use client";
import React, { useEffect, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import CommanListFilter from "@/_components/dashbord/elements/filterbars/CommanListFilter";
import DynimicTable from "@/_components/dashbord/table/DynimicTable";
import {
  repotedblogtableColumns,
  reporedBlogsuperAdminblogColumns,
} from "@/jsonData/tableData";
import TableFooter from "@/_components/dashbord/table/tablefooter/TableFooter";
import { FillterContext } from "@/_contextApi/FillterContextApi";
import useUserRoleColumns from "@/_custome-hooks/useUserRoleColumns";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import {
  featuredBlogActions,
  reportBlogActions,
} from "@/app/utils/blogActions";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ReportBlogsWrapper(props) {
  const { data } = props;
  const userRole = "superAdmin";
  const [allData, setallData] = useState(data);
  const { visibalRows } = useContext(FillterContext);
  const { handleSortClick, sortOrder } = useTableFillters(allData);
  const roleBasedColumns = useUserRoleColumns(
    userRole,
    repotedblogtableColumns,
    {
      superAdmin: reporedBlogsuperAdminblogColumns,
    }
  );
  const handelBooleanSwitch = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      const res = await featuredBlogActions(obj);
      console.log(res.data);
      if (res.data.status === "success") {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message || "something went wrong");
    }
  };

  const handelDelete = (data) => {
    alert(data);
  };

  // Function to Export Data to Excel
  const exportToExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(allData);

    // Append worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Blogs Data");

    // Generate a binary string for the Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the Excel file
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "blog-data.xlsx");
  };

  const handelReportaction = async (id, filedContent) => {
    try {
      const obj = {
        _id: id,
        filedContent,
      };
      const res = await reportBlogActions(obj);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Toaster />
      <div>
        <DashBordListHeader
          listTitle="Blog All List "
          exporthandel={exportToExcel}
        />
      </div>
      <div className={"content_layout"}>
        <div className={"fillter_table_wrapper"}>
          <div>
            <CommanListFilter
              data={allData}
              serachPlacholder="search Title"
              searchFiled="blogTitle"
            />
          </div>
          <div>
            <DynimicTable
              tableColumns={roleBasedColumns}
              tableData={visibalRows}
              booleanSwithHandel={handelBooleanSwitch}
              handelSingleDelete={handelDelete}
              sorthandel={handleSortClick}
              sortOrder={sortOrder}
              threestateswitchHandler={handelReportaction}
            />
          </div>
          <div>
            <TableFooter data={allData} />
          </div>
        </div>
      </div>
    </div>
  );
}
