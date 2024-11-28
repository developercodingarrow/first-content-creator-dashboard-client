"use client";
import React, { useContext } from "react";
import styles from "./css/model.module.css";
import { IoCloseSharp } from "../ApplicationIcons";
import ClickTextBtn from "../elements/buttons/ClickTextBtn";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";

export default function DeleteModel(props) {
  const { isDeleteModel, actionHandler, handelCloseDeleteModel } =
    useContext(ModelsContext);
  return (
    <>
      {isDeleteModel && (
        <div className={styles.model_full_container}>
          <div className={styles.model_container}>
            <ModelHeader
              modelTitle="Delete Model"
              modelCloseHandler={handelCloseDeleteModel}
            />
            <div className={styles.model_body}>
              Are You Sure to Delete Then delete Other Wise clcik on Cancel....
              ?
            </div>
            {/* <div className={styles.model_footer}>
              <ClickTextBtn
                btnText="Cancel"
                disabledBtn={false}
                btnLoading={false}
                size="medium"
                clickHandel={handelCloseDeleteModel}
              />

              <ClickTextBtn
                btnText="Delete"
                disabledBtn={false}
                btnLoading={false}
                size="medium"
                clickHandel={actionHandler}
              />
            </div> */}
            <ModelCommanFooter modelCloseHandler={handelCloseDeleteModel} />
          </div>
        </div>
      )}
    </>
  );
}
