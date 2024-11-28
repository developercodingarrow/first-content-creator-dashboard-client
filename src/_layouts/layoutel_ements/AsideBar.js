"use client";

import React, { useContext, useState } from "react";
import styles from "./css/asidebar.module.css";
import {
  MdDashboard,
  FaList,
  IoMdList,
  IoCloseSharp,
  LuPlusCircle,
} from "../../_components/ApplicationIcons";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
import { AppContext } from "@/_contextApi/AppContext";
import ClickIconBtn from "@/_components/elements/buttons/ClickIconBtn";
import AsideNavItemsLinks from "./AsideNavItemsLinks";
import AsideNavItemClick from "./AsideNavItemClick";
import UserDetailsAvatar from "@/_components/userAvatars/UserDetailsAvatar";

export default function AsideBar() {
  const { isSidebarCollapsed, setIsSidebarCollapse, toggleSidebar } =
    useContext(AppContext);

  return (
    <div
      className={`${styles.main_container} ${
        isSidebarCollapsed ? styles.main_container_collapsed : ""
      }`}
    >
      <div className={styles.top_section}>
        <div className={styles.flex_sb_container}>
          <UserDetailsAvatar name="Sanjay" email="email@gmail.com" />
          <div
            onClick={toggleSidebar}
            className={`${styles.header_close} ${
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
          <div className={styles.aside_click_option_wrapper}>
            <AsideNavItemClick />
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
          />
        ) : (
          <ClickTextBtn
            btnText="LOG OUT"
            disabledBtn={false}
            btnLoading={false}
            size="medium"
            fullWidth={true}
          />
        )}
      </div>
    </div>
  );
}
