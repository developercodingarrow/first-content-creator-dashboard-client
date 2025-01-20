"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tableelements.module.css";
export default function TableBooleanSwitchBtn(props) {
  const { data, id, handler } = props;
  const [isActive, setIsActive] = useState(data);
  const toggleSwitch = () => {
    handler(id);
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(data);
  }, [isActive]);

  return (
    <div
      className={`${styles.switch} ${isActive ? styles["switch-active"] : ""}`}
      onClick={toggleSwitch}
    >
      <div className={styles["switch-circle"]}></div>
    </div>
  );
}
