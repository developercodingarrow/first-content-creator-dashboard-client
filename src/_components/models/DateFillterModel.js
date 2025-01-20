"use client";
import React, { useEffect, useContext } from "react";
import styles from "./css/model.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import DateFillter from "../dashbord/table/dateFillter/DateFillter";

export default function DateFillterModel(props) {
  const { handelDateRange } = props;
  const {
    isMobileDateModel,
    handelOpenMobileDateModel,
    handelCloseMobileDateModel,
  } = useContext(ModelsContext);
  return (
    <div
      className={`${styles.model_full_container} ${
        isMobileDateModel ? styles.visible : ""
      }`}
    >
      <div className={styles.model_container}>
        <ModelHeader
          modelTitle="Delete Model"
          modelCloseHandler={handelCloseMobileDateModel}
        />
        <div className={styles.model_inputBody}>
          <DateFillter handelDateRange={handelDateRange} />
        </div>
      </div>
    </div>
  );
}
