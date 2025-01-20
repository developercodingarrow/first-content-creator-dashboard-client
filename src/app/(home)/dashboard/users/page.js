import React from "react";
import { cookies } from "next/headers";
import UserListWrapper from "./wrapper";
import { allUsersAction } from "@/app/utils/userActions";
import CustomeErrorUI from "@/_components/CustomErrors/CustomeErrorUI";

export default async function AllUsersListPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await allUsersAction(authToken);

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
    <div className="page_main_container">
      {" "}
      <UserListWrapper data={initialData} />{" "}
    </div>
  );
}
