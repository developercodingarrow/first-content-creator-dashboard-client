"use client";
import React from "react";
import { loginotpVerfication } from "@/app/utils/authActions";
import { otpInputFiled } from "@/jsonData/formInputsData";
import VerificationUi from "@/_components/auth/VerificationUi";

export default function LoginOtpwrapper() {
  return (
    <div>
      <VerificationUi
        formHeading="OTP"
        formSubText="please enter you OTP which is sent i your email"
        formInputs={otpInputFiled}
        formType="OTP"
        formHandel={loginotpVerfication}
      />
    </div>
  );
}
