"use client";
import React from "react";
import styles from "./css/inputsStyles.module.css";

export default function SimpleInput(props) {
  const { inputPlaceholder, inputValue, inputName, inputChnageHandler } = props;
  return (
    <input
      type="text"
      placeholder={inputPlaceholder}
      className={styles.input_style}
      value={inputValue}
      name={inputName} // Make sure to set the name attribute
      onChange={(e) => inputChnageHandler(e)}
    />
  );
}
