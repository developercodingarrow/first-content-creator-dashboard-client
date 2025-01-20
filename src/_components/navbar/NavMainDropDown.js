import React from "react";
import styles from "./css/mainnavbar.module.css";
import Link from "next/link";
export default function NavMainDropDown() {
  const dropOptions = [
    {
      text: "Home",
      hrfLink: "/",
    },
    {
      text: "Blogs",
      hrfLink: "/dashboard/blogs",
    },
    {
      text: "Users",
      hrfLink: "/dashboard/users",
    },
    {
      text: "Tags",
      hrfLink: "/dashboard/featured-tag",
    },
  ];

  return (
    <div className={styles.dropDown_container}>
      <div className={styles.navigation_option_wrapper}>
        {dropOptions.map((el, index) => {
          return (
            <Link
              href={`${el.hrfLink}`}
              className={styles.drop_downnavigation_links}
              key={index}
            >
              {el.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
