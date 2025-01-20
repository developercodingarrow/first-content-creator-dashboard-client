"use client";
import React, { useContext } from "react";
import styles from "../css/model.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ClickTextBtn from "@/_components/elements/buttons/ClickTextBtn";
import SubmitBtn from "@/_components/elements/buttons/SubmitBtn";
import { AppContext } from "@/_contextApi/AppContext";

export default function ModelCommanFooter(props) {
  const { actionType, btnText, clickBtnHandel } = props;
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { actionHandler } = useContext(ModelsContext);
  return (
    <div className={styles.model_footer}>
      {actionType === "submit" && (
        <SubmitBtn btnText="Update" btnLoading={isBtnLoadin} size="medium" />
      )}
      {actionType === "click" && (
        <ClickTextBtn
          btnText={btnText}
          btnLoading={isBtnLoadin}
          size="medium"
          disabledBtn={false}
          clickHandel={clickBtnHandel}
        />
      )}
    </div>
  );
}
