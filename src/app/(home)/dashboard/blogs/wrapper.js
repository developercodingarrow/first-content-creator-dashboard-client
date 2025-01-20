"use client";
import React, { useEffect, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./wrapper.module.css";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import CommanListFilter from "@/_components/dashbord/elements/filterbars/CommanListFilter";
import DynimicTable from "@/_components/dashbord/table/DynimicTable";
import { blogtableColumns, superAdminblogColumns } from "@/jsonData/tableData";
import TableFooter from "@/_components/dashbord/table/tablefooter/TableFooter";
import { FillterContext } from "@/_contextApi/FillterContextApi";
import useUserRoleColumns from "@/_custome-hooks/useUserRoleColumns";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import {
  allBlogsAction,
  featuredBlogActions,
  reportBlogActions,
} from "@/app/utils/blogActions";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { AuthContext } from "@/_contextApi/authContext";
import { AppContext } from "@/_contextApi/AppContext";

export default function BlogListwrapper(props) {
  const { data = [] } = props;

  const { isloading, setisloading } = useContext(AppContext);
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;
  const { allData, setallData, visibalRows } = useContext(FillterContext);
  const { handleSortClick, sortOrder } = useTableFillters(allData);
  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    superAdmin: superAdminblogColumns,
  });

  const handelBooleanSwitch = async (id) => {
    try {
      const obj = {
        _id: id,
      };
      setisloading(true);
      const res = await featuredBlogActions(obj);
      if (res.error) {
        toast.error(res.error || "something went wrong");
        setisloading(false);
        setallData(data);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);

        setallData((prevData) =>
          prevData.map((blog) =>
            blog._id === id ? { ...blog, featured: !blog.featured } : blog
          )
        );
        setisloading(false);
      }
    } catch (error) {
      toast.error(error.message || "something went wrong");
      setisloading(false);
    }
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

  useEffect(() => {
    setallData(data);
  }, []);

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
              sorthandel={handleSortClick}
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
