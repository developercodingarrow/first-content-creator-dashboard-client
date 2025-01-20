"use client";
import React from "react";
import styles from "./css/inputsStyles.module.css";

export default function SimpleInput(props) {
  const {
    inputPlaceholder,
    inputValue,
    inputName,
    inputChnageHandler,
    inputSize = "medium",
  } = props;
  return (
    <input
      type="text"
      placeholder={inputPlaceholder}
      className={`${styles.input_style} ${styles[inputSize]}`}
      value={inputValue}
      name={inputName} // Make sure to set the name attribute
      onChange={(e) => inputChnageHandler(e)}
    />
  );
}
