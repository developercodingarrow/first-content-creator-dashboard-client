"use client";
import React, { useContext } from "react";
import Styles from "./css/btnStyles.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";

export default function ClickTextBtn(props) {
  const {
    btnText,
    disabledBtn,
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false, // Default is not full width
    clickHandel,
  } = props;
  const { actionID } = useContext(ModelsContext);

  const handelClick = () => {
    if (!disabledBtn) {
      clickHandel(actionID);
    }
  };

  return (
    <div className={Styles.btn_wrapper}>
      <button
        type="button"
        className={`${Styles.btn_style} ${Styles[btnType]} ${Styles[size]} ${
          fullWidth ? Styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
        onClick={handelClick}
      >
        {btnLoading && <span className={Styles.spinner}></span>}
        <span>{btnText}</span>
      </button>
    </div>
  );
}
