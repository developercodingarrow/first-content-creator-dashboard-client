"use client";
import React from "react";
import styles from "./tableSearch.module.css";
import { HiMagnifyingGlass } from "../../../ApplicationIcons";
export default function TableSearch(props) {
  const { searchFiled, placholder, searchHandel } = props;
  return (
    <div className={styles.flex_container}>
      <div className={styles.search_icon}>
        <HiMagnifyingGlass />{" "}
      </div>
      <div>
        <input
          type="text"
          placeholder={placholder}
          className={`${styles.search_input} small_light_text text_color_gray`}
          onChange={(e) => searchHandel(e.target.value, searchFiled)}
        />
      </div>
    </div>
  );
}
