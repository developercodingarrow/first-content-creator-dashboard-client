"use client";
import React from "react";
import AuthUi from "@/_components/auth/AuthUi";
import { otpLoginAction } from "@/app/utils/authActions";
import { userLoginInputs } from "@/jsonData/formInputsData";
export default function LoginPagewrapper() {
  return (
    <div>
      <AuthUi
        formHeading="LOGIN"
        formSubText="please Enter you E-mail Address"
        formInputs={userLoginInputs}
        formType="OTP"
        formHandel={otpLoginAction}
      />
    </div>
  );
}
