import React from "react";
import styles from "./css/tableelements.module.css";
export default function TablemultiStatus(props) {
  const { data } = props;

  const getStatusClass = (status) => {
    switch (status) {
      case "spam":
        return styles.draft;
      case "rules_violation":
        return styles.draft;
      case "no_action":
        return styles.published;
      case "harassment":
        return styles.pending;
      case "active":
        return styles.active;
      case "moderation_review":
        return styles.moderation_review;
      case "suspend":
        return styles.suspension;

      default:
        return "";
    }
  };
  // Rules Violation
  return <div className={getStatusClass(data)}>{data}</div>;
}
