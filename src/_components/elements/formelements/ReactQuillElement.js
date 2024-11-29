"use client";
import React from "react";
import styles from "./css/inputsStyles.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  CreateEditorModules,
  CreateEditorformats,
} from "@/jsonData/reactQuillTextEditor";

export default function ReactQuillElement(props) {
  const { inputValue, inputChnageHandler } = props;
  return (
    <ReactQuill
      theme="snow"
      value={inputValue}
      modules={CreateEditorModules}
      formats={CreateEditorformats}
      onChange={inputChnageHandler}
      className={styles.editor_style}
      style={{ minHeight: "300px", height: "400px" }}
    />
  );
}
