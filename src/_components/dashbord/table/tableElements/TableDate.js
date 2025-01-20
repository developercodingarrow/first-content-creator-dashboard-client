import { formatDate } from "@/_logicalFunctions/formatDate";
import React from "react";

export default function TableDate(props) {
  const { data, textStyle } = props;
  const dateText = formatDate(data);
  return <div className={textStyle}> {dateText}</div>;
}
