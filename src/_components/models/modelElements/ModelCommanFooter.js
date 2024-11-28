"use client";
import React, { useContext } from "react";
import styles from "../css/model.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";

export default function ModelCommanFooter(props) {
  const { modelCloseHandler } = props;
  const { actionHandler } = useContext(ModelsContext);
  return (
    <div className={styles.model_footer}>
      <ClickTextBtn
        btnText="Cancel"
        disabledBtn={false}
        btnLoading={false}
        size="medium"
        clickHandel={modelCloseHandler}
      />

      <ClickTextBtn
        btnText="Delete"
        disabledBtn={false}
        btnLoading={false}
        size="medium"
        clickHandel={actionHandler}
      />
    </div>
  );
}
