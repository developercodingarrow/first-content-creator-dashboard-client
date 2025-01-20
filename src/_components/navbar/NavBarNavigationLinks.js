import React from "react";
import styles from "./css/mainnavbar.module.css";
import {
  MdDashboard,
  TiDocumentText,
} from "../../_components/ApplicationIcons";
import Link from "next/link";
export default function NavBarNavigationLinks() {
  const navbarIconOptions = [
    {
      icon: <MdDashboard />,
      hrfLink: "/",
    },
    {
      icon: <TiDocumentText />,
      hrfLink: "/dashboard/blogs",
    },
  ];

  return (
    <div className={styles.link_navigiation_wrapper}>
      {navbarIconOptions.map((el, index) => {
        return (
          <Link
            key={index}
            href={`${el.hrfLink}`}
            className={styles.navBar_link_icon_navItem}
          >
            {el.icon}
          </Link>
        );
      })}
    </div>
  );
}
