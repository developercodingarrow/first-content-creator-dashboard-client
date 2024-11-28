"use client";
import React, { useContext, useState } from "react";
import styles from "./css/asidbarnavItemsLinks.module.css";
import { AppContext } from "@/_contextApi/AppContext";
import { LuPlusCircle } from "../../_components/ApplicationIcons";
import Link from "next/link";

export default function AsideNavItemClick() {
  const { isSidebarCollapsed, setIsSidebarCollapse, toggleSidebar } =
    useContext(AppContext);

  const asideOptions = [
    {
      text: "Create",
      icon: <LuPlusCircle />,
    },
  ];

  return (
    <div>
      {asideOptions.map((el, index) => {
        return (
          <div className={styles.aside_nav_item}>
            <div className={styles.nav_item_left}>
              <div className={styles.nav_item_menu_icon}> {el.icon}</div>
              <div
                className={`${styles.nav_item_menu_text} ${
                  isSidebarCollapsed ? styles.hide_element_collapsed : ""
                }`}
              >
                {el.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
