import React from "react";
import styles from "./userdetailui.module.css";
import { MdEmail, FaHashtag } from "../ApplicationIcons";
import UserInfoBar from "./elements/UserInfoBar";
export default function UserInfo(props) {
  const { data } = props;
  return (
    <div className={styles.detail_component_container}>
      <div>
        <h2 className="mg_bootom_20">Details</h2>
        <UserInfoBar data={data} filed="createdAt" type="date" />
        <UserInfoBar data={data} filed="email" type="text" />
        <UserInfoBar data={data} filed="userName" type="text" />
        <UserInfoBar data={data} filed="facebook" type="link" />
        <UserInfoBar data={data} filed="twitter" type="link" />
        <UserInfoBar data={data} filed="instagram" type="link" />
        <UserInfoBar data={data} filed="businessWebsite" type="link" />
      </div>
      <section className="mg_bootom_20">
        <h2 className="mg_bootom_20">About</h2>
        <div className="medium_light_text">
          <p
            dangerouslySetInnerHTML={{
              __html: data?.bio || "",
            }}
            className={styles.content}
          ></p>
        </div>
      </section>
    </div>
  );
}
