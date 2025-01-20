"use client";
import React, { useState } from "react";
import styles from "./dynimictable.module.css";
import { IoIosArrowRoundDown } from "../../ApplicationIcons";
import TextElements from "@/_components/elements/textElements/TextElements";
import TableBooleanStatus from "./tableElements/TableBooleanStatus";
import TableBooleanSwitchBtn from "./tableElements/TableBooleanSwitchBtn";
import TablePopulatedText from "./tableElements/TablePopulatedText";
import TablePageRedirect from "./tableElements/TablePageRedirect";
import TableDeleteIcon from "./tableElements/TableDeleteIcon";
import TableUserAvator from "./tableElements/TableUserAvator";
import TableDate from "./tableElements/TableDate";
import TableSingleImg from "./tableElements/TableSingleImg";
import TableNumberText from "./tableElements/tableNumberText";
import TablemultiStatus from "./tableElements/tablemultiStatus";
import SkeletonTableBar from "@/_components/Skeleton/SkeletonTableBar";
import ThreeStateSwitchBtn from "./tableElements/ThreeStateSwitchBtn";

export default function DynimicTable(props) {
  const {
    tableColumns,
    tableData,
    booleanSwithHandel,
    threestateswitchHandler,
    handelSingleDelete,
    sorthandel,
    sortOrder,
  } = props;

  const handelCheckBox = () => {
    alert("handel Check box");
  };

  const handeleuserAvaotor = () => {
    alert("user avator");
  };

  const handlers = {
    checkbox: handelCheckBox,
    userAvator: handeleuserAvaotor,
    // view: handelCheckBox,
    booleanSwicthBtn: booleanSwithHandel,
    deleteIcon: handelSingleDelete,
    threeStateSwitchBtn: threestateswitchHandler,
  };

  const actionhandler = {
    // view: booleanSwithHandel,
  };

  return (
    <div className={styles.table_container}>
      <table className={styles.dynimic_table}>
        <thead>
          <tr>
            {tableColumns.map((column, index) => {
              return (
                <th key={column.id} className={styles.tableTh}>
                  <span className={styles.th_span_style}>
                    {column.label}
                    {column.icon && (
                      <span
                        className={styles.iconStyle}
                        onClick={() => sorthandel(column.key)}
                      >
                        {" "}
                        <IoIosArrowRoundDown
                          className={`${
                            sortOrder
                              ? styles.ascending_arow
                              : styles.descending_arrow
                          }`}
                        />{" "}
                      </span>
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr>
              {tableColumns.map((el, index) => {
                return (
                  <td key={index}>
                    {" "}
                    <div>
                      <SkeletonTableBar />
                    </div>
                  </td>
                );
              })}
            </tr>
          ) : (
            tableData.map((row, no) => (
              <tr key={row.id}>
                {tableColumns.map((column) => {
                  const { content, className } = renderCellContent(
                    column,
                    column.component,
                    column.basePath || "",
                    column.key,
                    no,
                    row,
                    row[column.key],

                    handlers[column.component],
                    actionhandler
                  );

                  return (
                    <td
                      key={column.label}
                      className={`${styles.td_style} ${styles[className]}`}
                    >
                      {" "}
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const renderCellContent = (
  completecolumnFiled,
  componentType,
  basePath,
  keyProp,
  indexNo,
  completeData,
  elemnetdata,

  handler,
  handlers
) => {
  let content = null;
  let className = "";

  switch (componentType) {
    case "number":
      content = indexNo + 1;
      className = "numberCell";
      break;
    case "text":
      content = <TextElements text={elemnetdata} textStyle="small_text" />;
      className = "";
      break;
    case "date":
      content = <TableDate data={elemnetdata} textStyle="small_text" />;
      className = "";
      break;
    case "numberText":
      content = <TableNumberText data={elemnetdata} />;

      break;
    case "blodText":
      content = (
        <TextElements
          data={elemnetdata}
          textStyle="small_text capitalize_text"
        />
      );
      className = "text-cell";
      break;
    case "booleanStatus":
      content = <TableBooleanStatus data={elemnetdata} />;
      className = "boolean_status_cell";
      break;

    case "multiStatus":
      content = <TablemultiStatus data={elemnetdata} />;
      break;
    case "booleanSwicthBtn":
      if (handler) {
        content = (
          <TableBooleanSwitchBtn
            data={elemnetdata}
            keyProp={keyProp}
            id={completeData._id}
            handler={handler}
          />
        );
      }
      className = "boolean_switch_cell";
      break;

    case "threeStateSwitchBtn":
      if (handler) {
        content = (
          <ThreeStateSwitchBtn
            data={elemnetdata}
            keyProp={keyProp}
            completeData={completeData}
            handler={handler}
          />
        );
      }
      break;

    case "populatedText":
      content = (
        <TablePopulatedText
          data={elemnetdata}
          filed={completecolumnFiled.filed}
          textStyle="medium_normall_text"
        />
      );
      className = "text-cell";
      break;

    case "view":
      const dynamicPath = `${basePath}/${elemnetdata}`;
      content = <TablePageRedirect data={elemnetdata} path={dynamicPath} />;
      className = "checkBoxtr_style";

      break;

    case "deleteIcon":
      if (handler) {
        content = <TableDeleteIcon data={elemnetdata} handler={handler} />;
      }
      break;

    case "userAvator":
      content = <TableUserAvator data={elemnetdata} />;
      className = "";
      break;

    case "singleImg":
      content = <TableSingleImg data={elemnetdata} imgDirectory="" />;
      className = "";
      break;

    default:
      content = elemnetdata;
      break;
  }

  return {
    content,
    className,
  };
};
