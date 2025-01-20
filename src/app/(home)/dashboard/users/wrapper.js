"use client";
import React, { useEffect, useState, useContext } from "react";
import CommanListFilter from "@/_components/dashbord/elements/filterbars/CommanListFilter";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import DynimicTable from "@/_components/dashbord/table/DynimicTable";
import { userTableColumns } from "@/jsonData/tableData";
import TableFooter from "@/_components/dashbord/table/tablefooter/TableFooter";
import { FillterContext } from "@/_contextApi/FillterContextApi";
import useUserRoleColumns from "@/_custome-hooks/useUserRoleColumns";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { AuthContext } from "@/_contextApi/authContext";
export default function UserListWrapper(props) {
  const { data } = props;
  console.log("data---", data);
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;

  const { allData, setallData, visibalRows } = useContext(FillterContext);

  const roleBasedColumns = useUserRoleColumns(userRole, userTableColumns, {
    superAdmin: [],
  });
  const handelBooleanSwitch = (data) => {
    alert(data);
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users Data");

    // Generate a binary string for the Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the Excel file
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "users-data.xlsx");
  };

  useEffect(() => {
    setallData(data);
  }, []);

  return (
    <div>
      {" "}
      <div>
        <DashBordListHeader
          listTitle="Users All List "
          exporthandel={exportToExcel}
        />
      </div>
      <div className={"content_layout"}>
        <div className={"fillter_table_wrapper"}>
          <div>
            <CommanListFilter
              data={allData}
              serachPlacholder="search Email"
              searchFiled="email"
            />
          </div>
          <div>
            <DynimicTable
              tableColumns={roleBasedColumns}
              tableData={visibalRows}
              booleanSwithHandel={handelBooleanSwitch}
              handelSingleDelete={handelDelete}
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
