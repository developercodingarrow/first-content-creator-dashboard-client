import React, { useContext, useState } from "react";
import userAvtar from "../../../public/web-static image/user-avatar-img.png";
import styles from "./css/useravatar.module.css";

import { AppContext } from "@/_contextApi/AppContext";
import CircleImg from "./CircleImg";
import TextElements from "../elements/textElements/TextElements";

export default function UserDetailsAvatar(props) {
  const { name, email, imgDirectoryPath } = props;
  const { isSidebarCollapsed, setIsSidebarCollapse, toggleSidebar } =
    useContext(AppContext);
  return (
    <div className={styles.user_inLine_avatar}>
      <CircleImg
        imgSrc={userAvtar}
        avtar_wrapperStyle="header_avtar_wrapper"
        imgDirectoryPath={imgDirectoryPath}
      />
      <div
        className={`${styles.user_header_deatils_wrapper} ${
          isSidebarCollapsed ? styles.hide_element_collapsed : ""
        }`}
      >
        <TextElements
          text={name}
          textStyle="medium_semi_bold_text text_color_black"
        />
        <TextElements
          text={email}
          textStyle="small_light_text text_color_gray"
        />
      </div>
    </div>
  );
}
