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
                <th key={column.id}>
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
                    <p>loading skalation</p>
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
      content = <TextElements text={elemnetdata} textStyle="small_bold_text" />;
      className = "";
      break;
    case "blodText":
      content = (
        <TextElements
          text={elemnetdata}
          textStyle="small_bold_text_table_cell"
        />
      );
      className = "text-cell";
      break;
    case "booleanStatus":
      content = <TableBooleanStatus data={elemnetdata} />;
      className = "text-cell";
      break;
    case "booleanSwicthBtn":
      if (handler) {
        content = (
          <TableBooleanSwitchBtn
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
          textStyle="small_bold_text"
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

    default:
      content = elemnetdata;
      break;
  }

  return {
    content,
    className,
  };
};
