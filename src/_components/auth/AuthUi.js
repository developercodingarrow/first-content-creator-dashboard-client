"use client";
import React, { useContext, useState } from "react";
import styles from "./css/authui.module.css";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import useCustomeAuthForm from "@/_custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/_contextApi/AppContext";

export default function AuthUi(props) {
  const router = useRouter();
  const { formInputs, formType, formHeading, formHandel, formSubText } = props;
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await formHandel(data);
      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      if (res.status === "success") {
        toast.success(res.message);
        router.push(`/auth/otpverification/${res.UrlToken}`);
        setisBtnLoadin(false);
      }
    } catch (error) {
      setisBtnLoadin(false);
      toast.error("something went wrong");
    }
  };
  return (
    <div className={styles.main_container}>
      <Toaster
        toastOptions={{
          className: "small_text ",
        }}
      />
      <div className={styles.inner_container}>
        <div className={styles.form_wrapper_container}>
          <div className={styles.container_header}>
            <div className={`mg_sm_bottom`}>
              <h3>{formHeading}</h3>
            </div>
            <div className={"small_text capitalize_text"}>{formSubText}</div>
          </div>
          <div className={styles.form_wrraper}>
            <form onSubmit={handleSubmit(handleForm)}>
              <div className={styles.form_input_wrapper}>
                {updatedInputs.map((input, index) => {
                  return (
                    <div key={index} className={styles.form_input_filedBox}>
                      {renderInput(input)}

                      {errors[input.name] && (
                        <span className={"input_errors tiny_text"}>
                          {errors[input.name].message}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className={styles.submit_btn_wrapper}>
                <SubmitBtn
                  btnText="Login"
                  fullWidth={true}
                  size="large"
                  btnLoading={isBtnLoadin}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
