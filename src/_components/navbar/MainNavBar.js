import React, { useContext, useState } from "react";
import styles from "./css/mainnavbar.module.css";
import { MdArrowDropDown } from "../../_components/ApplicationIcons";
import userAvtar from "../../../public/web-static image/user-avatar-img.png";
import NavHangBug from "./NavHangBug";
import NavBarNavigationLinks from "./NavBarNavigationLinks";
import NavBarNavigationClick from "./NavBarNavigationClick";
import CircleImg from "../userAvatars/CircleImg";
import NavMainDropDown from "./NavMainDropDown";

export default function MainNavBar() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_sb_container}>
        <div className={styles.navBar_left}>
          <NavHangBug />
        </div>
        <div className={styles.navBar_right}>
          <div className={styles.navBar_linkNavigation_wrapper}>
            <NavBarNavigationLinks />
          </div>
          <div className={styles.navbar_click_navigation_wrapper}>
            <NavBarNavigationClick />
          </div>

          <div className={styles.navBar_user_avatar_wrapper}>
            <CircleImg
              imgSrc={userAvtar}
              avtar_wrapperStyle="navbar_avtar_wrapper"
            />
            <div className={styles.icon_box}>
              <MdArrowDropDown />
              <div className={styles.nav_dropDown_wrapper}>
                <NavMainDropDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
