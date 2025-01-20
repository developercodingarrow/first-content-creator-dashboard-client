"use client";
import React, { useContext } from "react";
import styles from "./css/model.module.css";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import { tagCreateInputFiled } from "@/jsonData/dashbordInputData";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import useCustomForm from "@/_custome-hooks/useCustomForm";
import { createNewTagActions } from "@/app/utils/tagActions";

export default function CreateInputModel() {
  const {
    isCreateInputModel,
    handelOpenCreateInputModel,
    handelCloseCreateInputModel,
  } = useContext(ModelsContext);
  const { handleSubmit, renderInput, isValid } = useCustomForm();

  const handelFormSubmit = async (data) => {
    try {
      const res = await createNewTagActions(data);
      console.log(res);
      if (res.data.status === "success") {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${styles.model_full_container} ${
        isCreateInputModel ? styles.visible : ""
      }`}
    >
      <div className={styles.model_container}>
        <ModelHeader
          modelTitle="Delete Model"
          modelCloseHandler={handelCloseCreateInputModel}
        />
        <div className={styles.model_inputBody}>
          <form onSubmit={handleSubmit(handelFormSubmit)}>
            {tagCreateInputFiled.map((input) => renderInput(input))}
            <ModelCommanFooter actionType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
