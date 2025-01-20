import React from "react";

export default function TextElements(props) {
  const { data = [], textStyle } = props;

  const truncatedData = data.length > 50 ? `${data.slice(0, 20)}...` : data;
  return <div className={textStyle}>{truncatedData}</div>;
}
