import React from "react";
import { cookies } from "next/headers";
import { webStatsAction } from "../utils/statsActions";
import WebStatsUi from "@/_components/webStats/WebStatsUi";

export default async function DashBordPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;

  try {
    const res = await webStatsAction(authToken);

    if (res.status === "success") {
      initialData = res.results;
    } else {
      initialData = [];
    }
  } catch (error) {
    return { error: error.message };
  }

  console.log(initialData);
  return (
    <div className="page_main_container">
      <WebStatsUi data={initialData} />
    </div>
  );
}
