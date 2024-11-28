"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tableelements.module.css";
export default function TableBooleanSwitchBtn(props) {
  const { data, keyProp, completeData, handler } = props;
  const [isActive, setIsActive] = useState(data);
  console.log("data----", data);
  const toggleSwitch = () => {
    handler(completeData._id);
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(data);
  }, []);

  return (
    <div
      className={`${styles.switch} ${isActive ? styles["switch-active"] : ""}`}
      onClick={toggleSwitch}
    >
      <div className={styles["switch-circle"]}></div>
    </div>
  );
}
