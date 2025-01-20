import React from "react";
import { Poppins } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import AppContextProvider from "@/_contextApi/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Authlayout({ children }) {
  return (
    <html lang="en" className={` ${poppins.variable}`}>
      <head></head>
      <body>
        <AppContextProvider>
          <div> {children}</div>
        </AppContextProvider>
      </body>
    </html>
  );
}
