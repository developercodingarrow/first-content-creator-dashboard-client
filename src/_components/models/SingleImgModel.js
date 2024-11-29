"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/model.module.css";
import { IoCloseSharp, MdDelete } from "../ApplicationIcons";
import ClickTextBtn from "../elements/buttons/ClickTextBtn";
import { ModelsContext } from "@/_contextApi/ModelContextApi";
import useImageUpload from "@/_custome-hooks/useImageUpload";
import dummyImg from "../../../public/web-static image/Facebook-og-image.png";
import Image from "next/image";
import ModelHeader from "./modelElements/ModelHeader";
import ImgUplodBox from "../imgUplod/ImgUplodBox";
import SimpleInput from "../elements/formelements/SimpleInput";
import SimpleTextArea from "../elements/formelements/SimpleTextArea";

export default function SingleImgModel() {
  const {
    isSingleImgModel,
    handleOpenSingleImgModel,
    handleCloseSingleImgModel,
  } = useContext(ModelsContext);
  const {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
    isValid,
    errors,
  } = useImageUpload();

  return (
    <>
      {isSingleImgModel && (
        <div className={styles.model_full_container}>
          <div className={styles.inner_container}>
            <div className={styles.img_model_container}>
              <ModelHeader
                modelTitle="Upload Blog Thumbiln"
                modelCloseHandler={handleCloseSingleImgModel}
              />
              <div className={styles.Img_model_body}>
                <div className={styles.body_inner_container}>
                  <div className={styles.model_img_part}>
                    {previewImage ? (
                      <div className={styles.img_previou_box}>
                        <Image
                          src={previewImage}
                          width={500}
                          height={500}
                          alt="image alt text"
                          className={styles.img_style}
                        />
                      </div>
                    ) : (
                      <div className={styles.model_img_uplodbox_wrapper}>
                        {" "}
                        <ImgUplodBox
                          boxtext="click to select Blog Thumblin here"
                          handelClick={handleImageUpload}
                          boximgInputaction={true}
                        />{" "}
                      </div>
                    )}
                  </div>
                  <div className={styles.model_input_part}>
                    <div className={styles.inputs_wrapper_container}>
                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>Title</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <SimpleInput
                            inputPlaceholder="Enter Image Title"
                            inputName="title"
                            inputChnageHandler={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>{errors.title}</span>
                      </div>
                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>Alt</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <SimpleInput
                            inputPlaceholder="Enter Image Alt text"
                            inputName="altText"
                            inputChnageHandler={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          {errors.altText}
                        </span>
                      </div>

                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>caption</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <SimpleInput
                            inputPlaceholder="Enter Image caption"
                            inputName="caption"
                            inputChnageHandler={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          {errors.caption}
                        </span>
                      </div>

                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>Descreption</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <SimpleTextArea
                            inputPlaceholder="Enter Image caption"
                            inputName="description"
                            inputChnageHandler={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          {errors.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.img_model_footer}>
                  <div className={styles.model_footer_left}>
                    {/* model_footer_left */}
                    {previewImage && (
                      <div
                        className={`single_icon_wrapper`}
                        onClick={removeImg}
                      >
                        {" "}
                        <MdDelete />{" "}
                      </div>
                    )}
                  </div>
                  {/* model_footer_right */}
                  <div className={styles.model_footer_right}>
                    <div>
                      <ClickTextBtn
                        btnText="save"
                        size="medium"
                        btnLoading={false}
                        disabledBtn={isValid}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
