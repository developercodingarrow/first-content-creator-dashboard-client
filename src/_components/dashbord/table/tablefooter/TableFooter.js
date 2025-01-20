"use client";
import React, { useEffect, useState } from "react";
import styles from "./tablefooter.module.css";
import useTableFillters from "@/_custome-hooks/useTableFillters";
import {
  IoMdArrowDropdown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "../../../ApplicationIcons";
export default function TableFooter(props) {
  const { data } = props;
  const {
    updateVisibleRows,
    handleRowsPerPageChange,
    totalRows,
    visibleRange,
    nextPage,
    prevPage,
    currentPage,
    initialRowsPerPage,
  } = useTableFillters(data);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handleChange = (e) => {
    const value = e.target.value;
    setRowsPerPage(value); // Update state
    handleRowsPerPageChange(e); // Call the handler from useTableFilters
  };

  useEffect(() => {
    updateVisibleRows(data);
  }, [rowsPerPage, currentPage]);
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.row_per_pageBox}>
          <div className="small_text">Rows per page:</div>
          <div className={styles.dropdown_container}>
            <select
              value={rowsPerPage}
              onChange={handleChange}
              className={styles.dropdown}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="100">100</option>
            </select>
            <IoMdArrowDropdown className={styles.dropdown_icon} />{" "}
            {/* Adding the icon */}
          </div>
        </div>

        <div className={styles.page_stats}>
          <span className="small_text"> {visibleRange.start}</span>{" "}
          <span className="small_text">- </span>
          <span className="small_text"> {visibleRange.end}</span>{" "}
          <span className="small_text">of </span>
          <span className="small_text">{totalRows} </span>
        </div>

        <div className={styles.prv_next_icon_wrapper}>
          <div>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={styles.arrow_btn}
            >
              <MdOutlineKeyboardArrowLeft />{" "}
            </button>
          </div>
          <div>
            <button
              onClick={nextPage}
              disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
              className={styles.arrow_btn}
            >
              <MdOutlineKeyboardArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
