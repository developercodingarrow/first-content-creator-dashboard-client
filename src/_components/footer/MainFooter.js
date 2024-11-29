import React from "react";
import styles from "./css/mainfooter.module.css";
import DekstopFooter from "./DekstopFooter";
import MobileFooter from "./MobileFooter";
export default function MainFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.dekstop_footer_wrapper}>
        <DekstopFooter />
      </div>
      <div className={styles.mobile_footer_wrapper}>
        <MobileFooter />
      </div>
    </div>
  );
}
