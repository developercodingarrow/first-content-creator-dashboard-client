import React from "react";

export default function TextElements(props) {
  const { text, textStyle } = props;
  return <div className={textStyle}>{text}</div>;
}
