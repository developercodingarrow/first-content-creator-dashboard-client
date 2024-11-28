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
                          <input
                            type="text"
                            placeholder="Enter Image Title"
                            className={styles.input_style}
                            name="title"
                            onChange={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          This is input error message
                        </span>
                      </div>
                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>Alt</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <input
                            type="text"
                            placeholder="Enter Image Alt text"
                            className={styles.input_style}
                            name="altText"
                            onChange={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          This is input error message
                        </span>
                      </div>

                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>caption</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <input
                            type="text"
                            placeholder="Enter Image caption"
                            className={styles.input_style}
                            name="caption"
                            onChange={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          This is input error message
                        </span>
                      </div>

                      <div className={styles.form_element_Box}>
                        <div className={styles.input_lable}>
                          <label>Descreption</label>
                        </div>
                        <div className={styles.input_wrapper}>
                          <textarea
                            type="text"
                            placeholder="Enter Image descreption"
                            className={styles.input_style}
                            name="description"
                            onChange={handelChange}
                          />
                        </div>
                        <span className={styles.error_msg}>
                          This is input error message
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.img_model_footer}>
                  <div className={styles.model_footer_right}>
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
                  <div className={styles.model_footer_left}>
                    <div>
                      <ClickTextBtn
                        btnText="save"
                        size="small"
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
