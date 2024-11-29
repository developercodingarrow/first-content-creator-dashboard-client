"use client";
import React, { useContext, useState } from "react";
import styles from "./css/asidbarnavItemsLinks.module.css";
import { AppContext } from "@/_contextApi/AppContext";
import { MdDashboard, FaList } from "../../_components/ApplicationIcons";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
export default function AsideNavItemsLinks() {
  const pathname = usePathname(); // Get current pathname
  const { isSidebarCollapsed, setIsSidebarCollapse, toggleSidebar } =
    useContext(AppContext);

  console.log(pathname);
  const asideOptions = [
    {
      text: "DashBord",
      icon: <MdDashboard />,
      hrfLink: "/",
    },
    {
      text: "Blogs",
      icon: <FaList />,
      hrfLink: "/dashboard/blogs",
    },
  ];

  return (
    <div>
      {asideOptions.map((el, index) => {
        const isActive = pathname === el.hrfLink;
        return (
          <Link
            href={`${el.hrfLink}`}
            key={index}
            className={`${styles.aside_nav_item} medium_semi_bold_text  ${
              isActive ? styles.active_link : ""
            }`}
          >
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
          </Link>
        );
      })}
    </div>
  );
}
