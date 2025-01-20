"use client";
import React, { useState, useRef, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import styles from "./datefillter.module.css";
import { IoCloseSharp } from "../../../ApplicationIcons";
export default function DateFillter(props) {
  const { handelDateRange } = props;
  const [toggleClender, settoggleClender] = useState(false);
  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const dateRangeRef = useRef(null); // Create a reference for the container

  const handelChnage = (ranges) => {
    const startDate = ranges.selection.startDate;
    const endDate = ranges.selection.endDate;
    setdate(ranges.selection);
    handelDateRange(startDate, endDate);
  };
  const handelToggleCender = () => {
    settoggleClender(!toggleClender);
  };

  // Close calendar when clicking outside the container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target)
      ) {
        settoggleClender(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Format date to a readable string
  const formatDate = (date) => {
    return date?.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div ref={dateRangeRef} className={styles.date_range_container}>
      <span className={styles.calender_btn} onClick={handelToggleCender}>
        {date.startDate && date.endDate
          ? `${formatDate(date.startDate)} - ${formatDate(date.endDate)}`
          : "Start Date - End Date"}
      </span>
      {toggleClender && (
        <div className={styles.date_rangeBox}>
          <div className={styles.close_bar}>
            {" "}
            <IoCloseSharp onClick={handelToggleCender} />{" "}
          </div>
          <DateRangePicker onChange={handelChnage} ranges={[date]} />{" "}
        </div>
      )}
    </div>
  );
}
