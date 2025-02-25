import React, { useContext, useState } from "react";
import styles from "./css/mainnavbar.module.css";
import { AppContext } from "@/_contextApi/AppContext";
import { IoMdList } from "../../_components/ApplicationIcons";
export default function NavHangBug() {
  const { toggleSidebar } = useContext(AppContext);
  return (
    <div className={styles.NavBar_hanbug_icon_Wrapper} onClick={toggleSidebar}>
      <IoMdList />
    </div>
  );
}
