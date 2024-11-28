"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [actionID, setactionID] = useState(null);
  const [actionHandler, setActionHandler] = useState(null);
  const [isDeleteModel, setisDeleteModel] = useState(false);
  const [isSingleImgModel, setisSingleImgModel] = useState(false);

  const handelOpenDeleteModel = (data, handler) => {
    setactionID(data);
    setActionHandler(() => handler);
    setisDeleteModel(true);
  };
  const handelCloseDeleteModel = (data = null) => {
    setisDeleteModel(false);
  };

  const handleOpenSingleImgModel = () => {
    setisSingleImgModel(true);
  };

  const handleCloseSingleImgModel = () => {
    setisSingleImgModel(false);
  };
  return (
    <ModelsContext.Provider
      value={{
        actionID,
        actionHandler,
        isDeleteModel,
        handelOpenDeleteModel,
        handelCloseDeleteModel,
        isSingleImgModel,
        setisSingleImgModel,
        handleOpenSingleImgModel,
        handleCloseSingleImgModel,
      }}
    >
      {" "}
      {children}{" "}
    </ModelsContext.Provider>
  );
}
