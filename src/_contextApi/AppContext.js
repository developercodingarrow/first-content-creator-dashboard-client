"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isloading, setisloading] = useState(false);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        toggleSidebar,
        isBtnLoadin,
        setisBtnLoadin,
        isloading,
        setisloading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
