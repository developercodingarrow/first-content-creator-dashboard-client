"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./userdetailui.module.css";
import UserDetailsCard from "./elements/UserDetailsCard";
import PublsihBogs from "./PublsihBogs";
import DraftBlogs from "./DraftBlogs";
import { usePathname, useParams } from "next/navigation";
import { userDetailAction, userSuspendActions } from "@/app/utils/userActions";
import UserInfo from "./UserInfo";
import TableBooleanSwitchBtn from "../dashbord/table/tableElements/TableBooleanSwitchBtn";

export default function UserDetailUi() {
  const params = useParams();
  const { slug } = params;
  const [activeTab, setActiveTab] = useState("Published");
  const [userDetails, setuserDetails] = useState(null);

  const handelgetData = async () => {
    try {
      const res = await userDetailAction(slug);
      console.log(res);
      if (res.status === "success") {
        setuserDetails(res.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetData();
  }, []);

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Published":
        return <PublsihBogs />;
      case "Draft":
        return <DraftBlogs />;
      case "Details":
        return <UserInfo data={userDetails} />;
      default:
        return null;
    }
  };

  const handeluserAction = async (id) => {
    try {
      const res = await userSuspendActions({ _id: id });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.main_container}>
      <section className={styles.details_page_header}>
        <div>
          <UserDetailsCard userdata={userDetails} />
        </div>
        <div>
          <TableBooleanSwitchBtn
            data={userDetails?.suspend}
            id={userDetails?._id}
            handler={handeluserAction}
          />
        </div>
      </section>
      <section className={styles.details_container}>
        <div className={styles.tab_container}>
          <div
            className={`${styles.tab} ${
              activeTab === "Published" ? styles.active_tab : ""
            }`}
            onClick={() => setActiveTab("Published")}
          >
            Published
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Draft" ? styles.active_tab : ""
            }`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Details" ? styles.active_tab : ""
            }`}
            onClick={() => setActiveTab("Details")}
          >
            Details
          </div>
        </div>
        <div className={styles.content_container}>{renderContent()}</div>
      </section>
    </div>
  );
}
