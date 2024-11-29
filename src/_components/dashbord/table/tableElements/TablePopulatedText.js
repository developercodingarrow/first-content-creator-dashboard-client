import React from "react";
import styles from "./css/tableelements.module.css";
export default function TablePopulatedText(props) {
  const { data, filed, textStyle } = props;
  console.log(filed);
  return <div className={textStyle}>{data[filed]}</div>;
}
