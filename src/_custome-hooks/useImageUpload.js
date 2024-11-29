"use client";

import React, { useContext, useEffect, useState } from "react";
import { ImgModelContext } from "@/_contextApi/ImgModelContextApi";

export default function useImageUpload() {
  const {
    previewImage,
    setPreviewImage,
    image,
    setImage,
    imageName,
    setImageName,
    imgData,
    setimgData,
  } = useContext(ImgModelContext);
  const [isValid, setIsValid] = useState(true);

  const [errors, setErrors] = useState({
    title: "",
    altText: "",
    caption: "",
    description: "",
  });

  const validateInputs = () => {
    const newErrors = {};

    if (!imgData.title || imgData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }
    if (!imgData.altText || imgData.altText.length < 3) {
      newErrors.altText = "Alt text must be at least 3 characters.";
    }
    if (!imgData.caption || imgData.caption.length < 3) {
      newErrors.caption = "Caption must be at least 3 characters.";
    }
    if (!imgData.description || imgData.description.length < 3) {
      newErrors.description = "Description must be at least 3 characters.";
    }

    setErrors(newErrors);
    setIsValid(
      Object.keys(newErrors).length > 0 || !previewImage // Consider previewImage
    );
  };

  console.log("isValid--", isValid);

  useEffect(() => {
    validateInputs();
  }, [imgData, previewImage]);

  useEffect(() => {
    validateInputs();
  }, [imgData, previewImage]);

  // Upload Image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const removeImg = () => {
    setPreviewImage(null);
    setImage(null);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setimgData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        value.length < 3
          ? `${
              name.charAt(0).toUpperCase() + name.slice(1)
            } must be at least 3 characters.`
          : "",
    }));
  };

  return {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    imageName,
    isValid,
    errors,
  };
}
