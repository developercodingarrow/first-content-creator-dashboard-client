"use client";
import React, { useEffect, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import useUserRoleColumns from "@/_custome-hooks/useUserRoleColumns";
import { useRouter } from "next/navigation";
import TableFooter from "@/_components/dashbord/table/tablefooter/TableFooter";
import DynimicTable from "@/_components/dashbord/table/DynimicTable";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import { FillterContext } from "@/_contextApi/FillterContextApi";
import {
  VerificationTagTableColumns,
  superAdminTagColumns,
} from "@/jsonData/tableData";
import {
  verificationTagActions,
  deleteTagActions,
  allTagAction,
} from "@/app/utils/tagActions";
import TagFillterBar from "@/_components/dashbord/elements/filterbars/TagFillterBar";
import CreateInputModel from "@/_components/models/CreateInputModel";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { AuthContext } from "@/_contextApi/authContext";

export default function VerificationTagWrapper(props) {
  const { data } = props;
  const router = useRouter();
  const { authUser } = useContext(AuthContext);
  const [isActionLoading, setisActionLoading] = useState(false);
  const userRole = authUser?.role;
  const [allData, setallData] = useState(data);
  const { visibalRows } = useContext(FillterContext);
  const { handleSortClick, sortOrder } = useTableFillters(allData);
  const roleBasedColumns = useUserRoleColumns(
    userRole,
    VerificationTagTableColumns,
    {
      superAdmin: superAdminTagColumns,
    }
  );

  const handelGetData = async () => {
    try {
      console.log("handel get");
      const res = await allTagAction();
      if (res.status === "success") {
        setallData(res.result);
      }
    } catch (error) {
      console.log("error-", error);
    }
  };

  useEffect(() => {
    handelGetData();
  }, [isActionLoading]);

  const handelBooleanSwitch = async (id) => {
    try {
      const obj = {
        _id: id,
      };
      setisActionLoading(true);
      const res = await verificationTagActions(obj);
      if (res.data.status === "success") {
        toast.success(res.data.message);
        setisActionLoading(false);
        router.refresh();
      }
    } catch (error) {
      toast.error(error.message || "something went wrong");
      setisActionLoading(false);
      router.refresh();
    }
  };
  const handelDelete = async (id) => {
    try {
      setisActionLoading(true);
      const obj = {
        _id: id,
      };

      const res = await deleteTagActions(obj);
      if ((res.data.status = "success")) {
        toast.success(res.data.message);
        setisActionLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setisActionLoading(false);
    }
  };

  // Function to Export Data to Excel
  const exportToExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(allData);

    // Append worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Feature Tags Data");

    // Generate a binary string for the Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the Excel file
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "feature-tags-data.xlsx");
  };

  return (
    <div>
      <CreateInputModel />
      <Toaster />
      <div>
        <DashBordListHeader
          listTitle="All Tag List "
          exporthandel={exportToExcel}
        />
      </div>
      <div className={"content_layout"}>
        <div className={"fillter_table_wrapper"}>
          <div>
            <TagFillterBar data={allData} />
          </div>
          <div>
            <DynimicTable
              tableColumns={roleBasedColumns}
              tableData={visibalRows}
              booleanSwithHandel={handelBooleanSwitch}
              handelSingleDelete={handelDelete}
              sorthandel={handleSortClick}
              sortOrder={sortOrder}
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
