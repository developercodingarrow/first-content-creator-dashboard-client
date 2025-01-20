import React from "react";
import styles from "../userdetailui.module.css";
import CircleImg from "@/_components/userAvatars/CircleImg";
import { MdEmail, FaHashtag } from "../../ApplicationIcons";
export default function UserDetailsCard(props) {
  const { userdata } = props;
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.inner_container}>
        <div className={styles.user_img_wrapper}>
          <CircleImg avtar_wrapperStyle="userDeatils_avtar_wrapper" />
        </div>
        <div className={styles.user_detail_wrraper}>
          <h4 className="mg_sm_bottom">{userdata?.name}</h4>
          <div className={`${styles.tag} mg_bootom_20`}>google auth</div>

          <div className={styles.details_box}>
            <div className={styles.details_bar}>
              <div className={styles.details_icon}>
                <FaHashtag />
              </div>
              <div className="small_text">{userdata?.userName}</div>
            </div>

            <div className={styles.details_bar}>
              <div className={styles.details_icon}>
                <MdEmail />{" "}
              </div>
              <div className="small_text">{userdata?.email}</div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
