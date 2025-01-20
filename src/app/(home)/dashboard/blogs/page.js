import React from "react";
import { cookies } from "next/headers";
import BlogListwrapper from "./wrapper";
import { allBlogsAction } from "@/app/utils/blogActions";
import CustomeErrorUI from "@/_components/CustomErrors/CustomeErrorUI";

export default async function BlogListpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await allBlogsAction(authToken);

    if (res.error) {
      console.log("test-error", res);
      return <CustomeErrorUI msg={res.error} statusCode={res.statusCode} />;
    }

    if (res.status === "success") {
      initialData = res.result.filter((blog) =>
        ["no_action"].includes(blog.reportAction)
      );
    } else {
      initialData = [];
    }
  } catch (error) {
    console.log("eerror area", error);
    return { error: error.message };
  }

  return (
    <div className="page_main_container">
      <BlogListwrapper data={initialData} />
    </div>
  );
}
