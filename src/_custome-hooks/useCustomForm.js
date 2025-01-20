"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import HookInput from "@/_components/elements/formelements/HookInput";
export default function useCustomForm() {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.inputType) {
      case "text":
        InputComponent = HookInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
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
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
