import React from "react";
import { cookies } from "next/headers";
import FeaturedTagwrapper from "./wrapper";
import { allTagAction } from "@/app/utils/tagActions";
import CustomeErrorUI from "@/_components/CustomErrors/CustomeErrorUI";

export default async function featuredTagPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await allTagAction(authToken);
    if (res.error) {
      console.log("test-error", res);
      return <CustomeErrorUI msg={res.error} statusCode={res.statusCode} />;
    }

    if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    return { error: error.message };
  }

  return (
    <div>
      <FeaturedTagwrapper data={initialData} />
    </div>
  );
}
