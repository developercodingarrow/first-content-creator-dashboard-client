"use client";
import Link from "next/link";
import React from "react";
import styles from "./css/tableelements.module.css";

export default function TablePageRedirect(props) {
  const { data, path } = props;
  return (
    <div>
      <Link href={`/${path}`} className={styles.view_link}>
        view
      </Link>
    </div>
  );
}
