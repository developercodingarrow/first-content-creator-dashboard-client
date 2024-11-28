"use client";
import React, { useContext, useState } from "react";
import styles from "./dashboarduilayouts.module.css";
import AsideBar from "../layoutel_ements/AsideBar";
import MainNavBar from "@/_components/navbar/MainNavBar";
import { AppContext } from "@/_contextApi/AppContext";
import MainFooter from "@/_components/footer/MainFooter";

export default function DashboardUiLayouts({ children }) {
  const { isSidebarCollapsed, setIsSidebarCollapse, toggleSidebar } =
    useContext(AppContext);

  return (
    <div className={styles.main_container}>
      <div
        className={`${styles.navbar_wrapper} ${
          isSidebarCollapsed ? styles.navbar_wrapper_collapsed : ""
        } `}
      >
        <MainNavBar />
      </div>
      <div
        className={`${styles.asidbar_wrapper} ${
          isSidebarCollapsed ? styles.asidbar_wrapper_collapsed : ""
        }`}
      >
        <div
          className={`${styles.asidebar_inner_wrapper} ${
            isSidebarCollapsed ? styles.asidebar_inner_collapsed : ""
          }`}
        >
          <AsideBar />
        </div>
      </div>
      <div
        className={`${styles.children_wrapper} ${
          isSidebarCollapsed ? styles.children_wrapper_collapsed : ""
        } `}
      >
        {children}
        <div className={styles.footer_wrraper}>
          <MainFooter />
        </div>
      </div>
    </div>
  );
}
