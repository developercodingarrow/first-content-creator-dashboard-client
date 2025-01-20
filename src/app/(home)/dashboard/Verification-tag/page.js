import React from "react";
import { cookies } from "next/headers";
import { allTagAction } from "@/app/utils/tagActions";
import VerificationTagWrapper from "./wrapper";
import CustomeErrorUI from "@/_components/CustomErrors/CustomeErrorUI";

export default async function VerificationTagPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await allTagAction(authToken);

    if (res.error) {
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
      {" "}
      <VerificationTagWrapper data={initialData} />{" "}
    </div>
  );
}
