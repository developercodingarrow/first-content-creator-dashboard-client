"use client";
import React, { createContext, useEffect, useState } from "react";
export const FillterContext = createContext();

export default function FillterContextProvider({ children }) {
  const [visibalRows, setvisibalRows] = useState([]);

  return (
    <FillterContext.Provider value={{ visibalRows, setvisibalRows }}>
      {children}
    </FillterContext.Provider>
  );
}
