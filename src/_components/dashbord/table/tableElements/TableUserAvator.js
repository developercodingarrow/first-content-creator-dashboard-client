import CircleImg from "@/_components/userAvatars/CircleImg";
import UserDetailsAvatar from "@/_components/userAvatars/UserDetailsAvatar";
import React from "react";
import userAvtar from "../../../../../public/web-static image/user-avatar-img.png";

export default function TableUserAvator(props) {
  const { data } = props;
  console.log("TableUserAvator--", data);
  return (
    <div>
      <CircleImg
        imgSrc={data}
        avtar_wrapperStyle="tableUser_avatar_wrapper"
        imgDirectoryPath={"/usersProfileImg"}
      />
    </div>
  );
}
