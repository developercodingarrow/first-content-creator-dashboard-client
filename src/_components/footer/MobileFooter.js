import React from "react";
import styles from "./css/mainfooter.module.css";
import Link from "next/link";
import {
  MdDashboard,
  TiDocumentText,
  FaUser,
  FaHashtag,
} from "../ApplicationIcons";

export default function MobileFooter() {
  const footerOptions = [
    {
      icon: <MdDashboard />,
      text: "Home",
      hrfLink: "/",
    },
    {
      icon: <TiDocumentText />,
      text: "Blogs",
      hrfLink: "/dashboard/blogs",
    },
    {
      icon: <FaUser />,
      text: "Users",
      hrfLink: "/dashboard/users",
    },
    {
      icon: <FaHashtag />,
      text: "Tags",
      hrfLink: "/dashboard/featured-tag",
    },
  ];

  return (
    <div className={styles.mobile_footer_container}>
      {footerOptions.map((el, index) => {
        return (
          <Link
            href={`${el.hrfLink}`}
            className={styles.footer_link}
            key={index}
          >
            <div className={styles.footer_icon}>{el.icon}</div>

            <span className={styles.small_text}>{el.text}</span>
          </Link>
        );
      })}
    </div>
  );
}
