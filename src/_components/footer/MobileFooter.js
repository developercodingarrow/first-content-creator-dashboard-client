import React from "react";
import styles from "./css/mainfooter.module.css";
import Link from "next/link";
import { MdDashboard } from "../ApplicationIcons";

export default function MobileFooter() {
  return (
    <div className={styles.mobile_footer_container}>
      <Link href={"/"} className={styles.footer_link}>
        <div className={styles.footer_icon}>
          <MdDashboard />
        </div>

        <span className={styles.small_text}>Home</span>
      </Link>
      <Link href={"/dashboard/blogs"} className={styles.footer_link}>
        <div className={styles.footer_icon}>
          <MdDashboard />
        </div>

        <span className={styles.small_text}>Home</span>
      </Link>

      <Link href={"/"} className={styles.footer_link}>
        <div className={styles.footer_icon}>
          <MdDashboard />
        </div>

        <span className={styles.small_text}>Home</span>
      </Link>

      <Link href={"/"} className={styles.footer_link}>
        <div className={styles.footer_icon}>
          <MdDashboard />
        </div>

        <span className={styles.small_text}>Home</span>
      </Link>
    </div>
  );
}
