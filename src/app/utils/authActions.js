"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "../../../config";
const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export async function otpLoginAction(formData) {
  const url = `${API_BASE_URL}/auth/login`;
  const method = "post";
  console.log("api url---", url);
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    console.log("res-action", res.data);
    if (res.data.status === "success") {
      return res.data; // Return the 'results' array
    } else {
      return []; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function loginotpVerfication(formData, slug) {
  const url = `${API_BASE_URL}/auth/login-otp/${slug}`;
  const method = "post";
  try {
    // const res = await performAPIAction(method, url, formData, authToken);
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      const token = res.data.token;
      const userDetail = res.data.user;
      cookies().set("jwt", token);
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });

      return res.data;
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function LogOutAction() {
  const url = `${API_BASE_URL}/auth/logout`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      withCredentials: true, // Send cookies with request
    });

    console.log("logout action---", res);

    // Remove the cookies by setting them with a past expiration date
    const cookieStore = cookies();
    cookieStore.set("jwt", "", { expires: new Date(0) });
    cookieStore.set("user", "", { expires: new Date(0) });
    cookieStore.set("g_state", "", { expires: new Date(0) });

    return { status: "success", data: res.data };
  } catch (error) {
    return { error: error.message };
  }
}
