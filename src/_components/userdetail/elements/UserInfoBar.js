import React from "react";
import styles from "../userdetailui.module.css";
import {
  MdEmail,
  FaHashtag,
  FaFacebookSquare,
  FaXTwitter,
  FaInstagram,
  FaGlobe,
  FaRegCalendarAlt,
} from "../../ApplicationIcons";
import { formatDate } from "@/_logicalFunctions/formatDate";
import Link from "next/link";

export default function UserInfoBar(props) {
  const { data, filed, type } = props;

  const renderIcon = () => {
    switch (filed) {
      case "email":
        return <MdEmail />;
      case "userName":
        return <FaHashtag />;
      case "facebook":
        return <FaFacebookSquare />;
      case "twitter":
        return <FaXTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "businessWebsite":
        return <FaGlobe />;
      case "createdAt":
        return <FaRegCalendarAlt />;

      default:
        return null;
    }
  };
  return (
    <div className={styles.details_box}>
      <div className={styles.details_bar}>
        <div className={styles.details_icon}>{renderIcon()}</div>
        {type === "date" && (
          <div className="small_text">{formatDate(data[filed])} </div>
        )}
        {type === "text" && <div className="small_text">{data[filed]}</div>}

        {type === "link" && (
          <Link href={`${data[filed]}`} className="small_text">
            {data[filed]}
          </Link>
        )}
      </div>
    </div>
  );
}
