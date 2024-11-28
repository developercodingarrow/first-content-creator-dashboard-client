"use client";
import React, { useContext } from "react";
import styles from "./singleImgUplod.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ImgUplodBox from "./ImgUplodBox";

export default function SingleImgUplod() {
  const { handleOpenSingleImgModel } = useContext(ModelsContext);
  return (
    <div className={styles.container}>
      <div className={styles.img_uplodBox_wrapper}>
        <ImgUplodBox
          boxtext="click to select file here"
          handelClick={handleOpenSingleImgModel}
          boximgInputaction={false}
        />
      </div>

      <div className={styles.container_footer}>
        <div className={styles.section_title}>File Details</div>
        <div className={styles.details_box}>
          <div>file name</div>
          <div>file size</div>
        </div>
      </div>
    </div>
  );
}
