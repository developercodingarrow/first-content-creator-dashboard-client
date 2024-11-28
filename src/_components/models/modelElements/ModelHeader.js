import React from "react";
import styles from "../css/model.module.css";
import { IoCloseSharp, MdDelete } from "../../ApplicationIcons";

export default function ModelHeader(props) {
  const { modelTitle, modelCloseHandler } = props;
  return (
    <div className={styles.model_header}>
      <div className={styles.model_titleBox}>{modelTitle}</div>
      <div className={`single_icon_wrapper`} onClick={modelCloseHandler}>
        {" "}
        <IoCloseSharp />{" "}
      </div>
    </div>
  );
}
