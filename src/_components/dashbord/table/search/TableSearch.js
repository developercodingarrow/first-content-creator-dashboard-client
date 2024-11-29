import React from "react";
import styles from "./tableSearch.module.css";
import { HiMagnifyingGlass } from "../../../ApplicationIcons";
export default function TableSearch() {
  return (
    <div className={styles.flex_container}>
      <div className={styles.search_icon}>
        <HiMagnifyingGlass />{" "}
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          className={`${styles.search_input} small_light_text text_color_gray`}
        />
      </div>
    </div>
  );
}
