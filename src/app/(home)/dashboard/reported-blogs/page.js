import React from "react";
import { cookies } from "next/headers";

import { allBlogsAction } from "@/app/utils/blogActions";
import ReportBlogsWrapper from "./wrapper";

export default async function BlogReportActionpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await allBlogsAction(authToken);

    if (res.status === "success") {
      initialData = res.result.filter((blog) =>
        ["harassment", "rules_violation", "spam"].includes(blog.reportAction)
      );
      console.log("Filtered Blogs:", initialData);
    } else {
      initialData = [];
    }
  } catch (error) {
    return { error: error.message };
  }

  return (
    <div className="page_main_container">
      {" "}
      <ReportBlogsWrapper data={initialData} />{" "}
    </div>
  );
}
