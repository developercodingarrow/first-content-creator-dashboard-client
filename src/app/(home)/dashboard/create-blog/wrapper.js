"use client";
import DashBordListHeader from "@/_components/dashbord/elements/pageheader/DashBordListHeader";
import CreateBlogUi from "@/_layouts/create_blogUi/CreateBlogUi";
import React from "react";

export default function CreateBlogwrapper() {
  return (
    <div>
      <div>
        <DashBordListHeader listTitle="Create Blog " />
      </div>
      <div className="content_layout">
        <CreateBlogUi />
      </div>
    </div>
  );
}
