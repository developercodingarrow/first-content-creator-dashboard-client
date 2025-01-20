"use client";
import React, { useEffect, useState, useContext } from "react";
import { blogtableColumns, tableSampleData } from "@/jsonData/tableData";
import DynimicTable from "../dashbord/table/DynimicTable";
import { userDetailAction } from "@/app/utils/userActions";
import { usePathname, useParams } from "next/navigation";

export default function DraftBlogs() {
  const params = useParams();
  const { slug } = params;
  const [allData, setallData] = useState([]);
  const handelgetData = async () => {
    try {
      const res = await userDetailAction(slug);
      console.log(res);
      if (res.status === "success") {
        const publishedBlogs = res.result.blogs.filter(
          (blog) => blog.status === "draft"
        );
        setallData(publishedBlogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetData();
  }, []);
  return (
    <div>
      <DynimicTable tableColumns={blogtableColumns} tableData={allData} />
    </div>
  );
}
