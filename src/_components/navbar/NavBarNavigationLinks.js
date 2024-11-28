import React from "react";
import styles from "./css/mainnavbar.module.css";
import { MdDashboard, FaList } from "../../_components/ApplicationIcons";
import Link from "next/link";
export default function NavBarNavigationLinks() {
  const navbarIconOptions = [
    {
      icon: <MdDashboard />,
      hrfLink: "/",
    },
    {
      icon: <FaList />,
      hrfLink: "/",
    },
  ];

  return (
    <div className={styles.link_navigiation_wrapper}>
      {navbarIconOptions.map((el, index) => {
        return (
          <Link
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
