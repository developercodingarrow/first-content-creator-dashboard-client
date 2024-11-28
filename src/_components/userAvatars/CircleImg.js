import React from "react";
import styles from "./css/useravatar.module.css";
import Image from "next/image";
export default function CircleImg(props) {
  const { imgSrc, avtar_wrapperStyle } = props;
  return (
    <div className={styles[avtar_wrapperStyle]}>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        className="circle_img_style"
      />
    </div>
  );
}
