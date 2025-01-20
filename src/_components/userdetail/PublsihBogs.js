"use client";
import React, { useEffect, useState, useContext } from "react";
import { blogtableColumns, superAdminblogColumns } from "@/jsonData/tableData";
import DynimicTable from "../dashbord/table/DynimicTable";
import { userDetailAction } from "@/app/utils/userActions";
import { usePathname, useParams } from "next/navigation";
import { featuredBlogActions } from "@/app/utils/blogActions";
import useUserRoleColumns from "@/_custome-hooks/useUserRoleColumns";

export default function PublsihBogs() {
  const params = useParams();
  const { slug } = params;
  const [allData, setallData] = useState([]);
  const userRole = "superAdmin";

  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    superAdmin: superAdminblogColumns,
  });

  const handelgetData = async () => {
    try {
      const res = await userDetailAction(slug);
      console.log(res);
      if (res.status === "success") {
        const publishedBlogs = res.result.blogs.filter(
          (blog) => blog.status === "published"
        );
        setallData(publishedBlogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    handelgetData();
  }, []);

  return (
    <div>
      <DynimicTable
        tableColumns={roleBasedColumns}
        tableData={allData}
        booleanSwithHandel={handelBooleanSwitch}
      />
    </div>
  );
}
