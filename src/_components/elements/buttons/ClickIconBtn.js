import React from "react";
import Styles from "./css/btnStyles.module.css";
import { IoPower, MdDelete } from "../../ApplicationIcons";
export default function ClickIconBtn(props) {
  const {
    btnIcon,
    disabledBtn,
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    fullWidth = false, // Default is not full width
    onClick,
  } = props;

  const renderIcon = () => {
    switch (btnIcon) {
      case "delete":
        return <MdDelete />;
      case "logout":
        return <IoPower />;
      default:
        return null; // Return nothing if no matching icon
    }
  };

  return (
    <div className={Styles.btn_wrapper}>
      <button
        type="button"
        className={`${Styles.btn_style} ${Styles[size]} ${
          fullWidth ? Styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
        onClick={onClick}
      >
        {btnLoading && <span className={Styles.spinner}></span>}
        <span>{renderIcon()}</span>
      </button>
    </div>
  );
}
