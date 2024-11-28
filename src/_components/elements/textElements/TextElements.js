import React from "react";
import styles from "./css/textElements.module.css";

export default function TextElements(props) {
  const { text, textStyle } = props;
  return <div className={styles[textStyle]}>{text}</div>;
}
