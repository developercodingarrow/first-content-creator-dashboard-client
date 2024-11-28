"use client";
import React, { useContext } from "react";
import styles from "./singleImgUplod.module.css";
export default function ImgUplodBox(props) {
  const { boxtext, handelClick, boximgInputaction = false } = props;
  return (
    <div className={styles.image_upod_box} onClick={handelClick}>
      <p>{boxtext}</p>
      {boximgInputaction && (
        <input type="file" accept="image/*" className={styles.file_inputStyle} />
      )}
    </div>
  );
}
