import React from "react";
import styles from "./css/tableelements.module.css";
export default function TableNumberText(props) {
  const { data } = props;
  return <div className={"small_text"}> {data} </div>;
}
