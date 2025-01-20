import React from "react";
import styles from "./css/useravatar.module.css";
import Image from "next/image";
export default function CircleImg(props) {
  const { imgSrc, avtar_wrapperStyle, imgDirectoryPath } = props;
  return (
    <div className={styles[avtar_wrapperStyle]}>
      {imgSrc?.url ? (
        <Image
          src={`${imgDirectoryPath}/${imgSrc?.url}`}
          alt="alt text"
          width={100}
          height={100}
          className="circle_img_style"
        />
      ) : (
        <Image
          src={`/usersProfileImg/user-avatar-img.png`}
          alt="alt text"
          width={100}
          height={100}
          className="circle_img_style"
        />
      )}
    </div>
  );
}
