"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./webstats.module.css";
import DashBordListHeader from "../dashbord/elements/pageheader/DashBordListHeader";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import StatsBox from "./StatsBox";

export default function WebStatsUi(props) {
  const { data } = props;
  const [allData, setallData] = useState(data);
  // Function to Export Data to Excel
  const exportToExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Wrap the allData object inside an array
    const dataArray = [allData];
    // Convert data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataArray);

    // Append worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Blogs Data");

    // Generate a binary string for the Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the Excel file
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "stats-data.xlsx");
  };
  return (
    <div>
      <div>
        <DashBordListHeader
          listTitle="Blog All List "
          exporthandel={exportToExcel}
        />
      </div>

      <div className={`${styles.container} content_layout`}>
        <StatsBox title="Users" statsNumber={data.totalUsers} />
        <StatsBox title="Form User " statsNumber={data.totalUsersByForm} />
        <StatsBox
          title="Google User"
          statsNumber={data.totalUsersByGoogleAuth}
        />
        <StatsBox title="Total Blogs" statsNumber={data.totalBlogs} />
        <StatsBox title="published Blogs" statsNumber={data.publishedBlogs} />
        <StatsBox title="Draft Blogs" statsNumber={data.draftBlogs} />
        <StatsBox title="Featured Blogs" statsNumber={data.featuredBlogs} />
        <StatsBox title="total View Count" statsNumber={data.totalViewCount} />

        <StatsBox title="Total Comments" statsNumber={data.totalComments} />
        <StatsBox title="Total Replies" statsNumber={data.totalReplies} />
        <StatsBox title="verified Tags" statsNumber={data.verifiedTags} />
        <StatsBox title="Featured Tags" statsNumber={data.featuredTags} />
      </div>
    </div>
  );
}
