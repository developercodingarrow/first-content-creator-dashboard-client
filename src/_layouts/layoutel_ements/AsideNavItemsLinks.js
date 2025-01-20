"use client";
import React, { useContext, useState } from "react";
import styles from "./css/asidbarnavItemsLinks.module.css";
import { AppContext } from "@/_contextApi/AppContext";
import {
  MdDashboard,
  TiDocumentText,
  FaUser,
  FaList,
  FaHashtag,
  MdError,
  LuDatabaseBackup,
  MdOutlineStorage,
} from "../../_components/ApplicationIcons";
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
      text: "All Users",
      icon: <FaUser />,
      hrfLink: "/dashboard/users",
    },
    {
      text: "Blogs",
      icon: <TiDocumentText />,
      hrfLink: "/dashboard/blogs",
    },
    {
      text: "Repored Blogs",
      icon: <MdError />,
      hrfLink: "/dashboard/reported-blogs",
    },
    {
      text: "Featured Tag",
      icon: <FaHashtag />,
      hrfLink: "/dashboard/featured-tag",
    },
    {
      text: "Verification Tag",
      icon: <FaHashtag />,
      hrfLink: "/dashboard/Verification-tag",
    },
    {
      text: "Backup Data",
      icon: <MdOutlineStorage />,
      hrfLink: "/dashboard/backups",
    },
    {
      text: "Full Backup",
      icon: <LuDatabaseBackup />,
      hrfLink: "/dashboard/full-backup",
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
            className={`${styles.aside_nav_item} medium_light_text  ${
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
