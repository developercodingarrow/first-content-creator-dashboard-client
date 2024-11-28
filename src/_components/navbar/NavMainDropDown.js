import React from "react";
import styles from "./css/mainnavbar.module.css";
import Link from "next/link";
export default function NavMainDropDown() {
  return (
    <div className={styles.dropDown_container}>
      <div className={styles.navigation_option_wrapper}>
        <Link href={"/"} className={styles.drop_downnavigation_links}>
          Dashbord
        </Link>
        <Link href={"/"} className={styles.drop_downnavigation_links}>
          Blogs
        </Link>
        <Link href={"/"} className={styles.drop_downnavigation_links}>
          New Blog
        </Link>
      </div>
    </div>
  );
}
