"use client";
import React from "react";
import styles from "./css/inputsStyles.module.css";

export default function SimpleTextArea(props) {
  const {
    inputPlaceholder,
    inputValue,
    inputName,
    inputChnageHandler,
    inputSize = "medium",
  } = props;
  return (
    <textarea
      type="text"
      placeholder={inputPlaceholder}
      className={`${styles.input_style} ${styles[inputSize]}`}
      name={inputName}
      value={inputValue}
      onChange={(e) => inputChnageHandler(e)}
    />
  );
}
