export const userLoginInputs = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",

    inputType: "text",
    inputSize: "medium",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
];

export const otpInputFiled = [
  {
    id: 1,
    name: "otp",
    placeholder: "Enter Sent OTP !",
    type: "text",
    lable: "OTP",
    inputType: "text",
    inputSize: "medium",
    validation: {
      required: "OTP is required.",
    },
  },
];
