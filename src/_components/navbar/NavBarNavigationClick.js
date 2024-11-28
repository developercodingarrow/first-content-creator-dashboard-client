import React from "react";
import styles from "./css/mainnavbar.module.css";
import { LuPlusCircle } from "../../_components/ApplicationIcons";
export default function NavBarNavigationClick() {
  return (
    <div className={styles.link_navigiation_wrapper}>
      <div className={styles.navBar_link_icon_navItem}>
        <LuPlusCircle />
      </div>
    </div>
  );
}
