"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [actionID, setactionID] = useState(null);
  const [actionHandler, setActionHandler] = useState(null);
  const [isDeleteModel, setisDeleteModel] = useState(false);
  const [isSingleImgModel, setisSingleImgModel] = useState(false);
  const [isCreateInputModel, setisCreateInputModel] = useState(false);
  const [isMobileDateModel, setisMobileDateModel] = useState(false);

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

  const handelOpenCreateInputModel = () => {
    setisCreateInputModel(true);
  };

  const handelCloseCreateInputModel = () => {
    setisCreateInputModel(false);
  };

  const handelOpenMobileDateModel = () => {
    setisMobileDateModel(true);
  };

  const handelCloseMobileDateModel = () => {
    setisMobileDateModel(false);
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
        isCreateInputModel,
        setisCreateInputModel,
        handelOpenCreateInputModel,
        handelCloseCreateInputModel,
        isMobileDateModel,
        setisMobileDateModel,
        handelOpenMobileDateModel,
        handelCloseMobileDateModel,
      }}
    >
      {" "}
      {children}{" "}
    </ModelsContext.Provider>
  );
}
