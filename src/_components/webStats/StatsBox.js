"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./webstats.module.css";

export default function StatsBox(props) {
  const { title, statsNumber } = props;
  return (
    <div className={styles.statsBox}>
      <h1 className={styles.statsNumber}>{statsNumber}</h1>
      <p className={styles.statsTitle}>{title}</p>
    </div>
  );
}
