"use client";

import React, { useContext, useState } from "react";
import styles from "./css/asidebar.module.css";
import { useRouter } from "next/navigation";
import { IoCloseSharp } from "../../_components/ApplicationIcons";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
import { AppContext } from "@/_contextApi/AppContext";
import ClickIconBtn from "@/_components/elements/buttons/ClickIconBtn";
import AsideNavItemsLinks from "./AsideNavItemsLinks";
import AsideNavItemClick from "./AsideNavItemClick";
import { LogOutAction } from "@/app/utils/authActions";

export default function AsideBar() {
  const router = useRouter();
  const {
    isSidebarCollapsed,
    setIsSidebarCollapse,
    toggleSidebar,
    isBtnLoadin,
    setisBtnLoadin,
  } = useContext(AppContext);

  const handelLogOut = async () => {
    try {
      setisBtnLoadin(true);
      const res = await LogOutAction();
      if (res.data.status === "success") {
        console.log(res);
        router.refresh();
        router.push("/auth/login");
        setisBtnLoadin(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoadin(false);
    }
  };

  return (
    <div
      className={`${styles.main_container} ${
        isSidebarCollapsed ? styles.main_container_collapsed : ""
      }`}
    >
      <div className={styles.top_section}>
        <div className={styles.flex_sb_container}>
          <div>
            <h4>Admin</h4>
          </div>
          <div
            onClick={toggleSidebar}
            className={`${styles.header_close} medium_text ${
              isSidebarCollapsed ? styles.hide_element_collapsed : ""
            }`}
          >
            <IoCloseSharp />{" "}
          </div>
        </div>
        <div className={styles.aside_option_Container}>
          <div className={styles.aside_link_option_wrapper}>
            <AsideNavItemsLinks />
          </div>
        </div>
      </div>
      <div className={styles.Bottom_section}>
        {isSidebarCollapsed ? (
          <ClickIconBtn
            btnIcon="logout"
            disabledBtn={false}
            btnLoading={false}
            size="circle_medium_iconBtn"
            fullWidth={false}
            clickHandel={handelLogOut}
          />
        ) : (
          <ClickTextBtn
            btnText="LOG OUT"
            disabledBtn={false}
            btnLoading={isBtnLoadin}
            size="medium"
            fullWidth={true}
            clickHandel={handelLogOut}
          />
        )}
      </div>
    </div>
  );
}
