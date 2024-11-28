"use client";
import React, { useContext } from "react";
import { MdDelete } from "../../../ApplicationIcons";
import styles from "./css/tableelements.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";

export default function TableDeleteIcon(props) {
  const { data, handler } = props;
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelOpenModel = () => {
    handelOpenDeleteModel(data, handler);
  };

  return (
    <div onClick={handelOpenModel} className={`single_icon_wrapper`}>
      <MdDelete />
    </div>
  );
}
