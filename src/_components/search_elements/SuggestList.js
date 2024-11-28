"use client";
import React from "react";
import styles from "./css/suggestlist.module.css";

export default function SuggestList(props) {
  const { filterData, filedName, itemClickhandel } = props;

  return (
    <div className={styles.drop_container}>
      {filterData.map((tag, index) => (
        <div
          className={styles.list_items}
          onClick={() => itemClickhandel(tag[filedName], tag.slug)}
        >
          {" "}
          {tag[filedName]}
        </div>
      ))}
    </div>
  );
}
