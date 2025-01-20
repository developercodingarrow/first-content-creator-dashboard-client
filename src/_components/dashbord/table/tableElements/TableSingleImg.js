import React from "react";
import Image from "next/image";
import styles from "./css/tableelements.module.css";
import sampleImg from "../../../../../public/web-static image/Facebook-og-image.png";
export default function TableSingleImg(props) {
  const { data } = props;

  return (
    <div className={styles.single_image_wrapper}>
      {" "}
      <Image
        src={sampleImg}
        width={300}
        height={300}
        className={styles.img_style}
      />
    </div>
  );
}
