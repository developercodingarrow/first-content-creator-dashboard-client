"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import HookInput from "../_components/elements/formelements/HookInput";
import HookPasswordInput from "../_components/elements/formelements/HookPasswordInput";

export default function useCustomeAuthForm(customeInputs, formType) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });
  let updatedInputs = [...customeInputs];

  if (formType === "SINGUP" || formType === "resetPassword") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        inputType: "text",
        placeholder: "password Confirm",
        lable: "password Confirm",
        inputSize: "extra_large",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  } else if (formType === "RESETPASSWORD") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        inputType: "text",
        placeholder: "Re-Enter New Password",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  }

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.inputType) {
      case "text":
        InputComponent = HookInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputSize: input.inputSize,
        };

        break;

      case "password":
        InputComponent = HookPasswordInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputLink: input.inputLink,
        };

        break;

      case "email":
        InputComponent = HookInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputType: input.type,
        };

        break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue=""
        rules={input.validation}
        render={({ field }) => (
          <>
            <InputComponent {...input} {...field} {...specificProps} />
          </>
        )}
      />
    );
  };
  return {
    handleSubmit,
    formState, // Ensure formState is included in the returned object
    control,
    watch,
    setValue,
    renderInput,
    updatedInputs,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
