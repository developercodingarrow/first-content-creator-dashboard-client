"use client";
import React, { useRef, useState } from "react";
import styles from "./backupcomponents.module.css";
import { IoMdCloudDownload } from "../ApplicationIcons";

export default function BackupComponent(props) {
  const { backuptitle, backuphandel, restorehandel, file, setFile } = props;

  // Ref for the file input
  const fileInputRef = useRef(null);
  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Trigger file input click
  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.box_heading}>
        <h2>{backuptitle}</h2>
      </div>
      <div className={styles.inner_wrraper}>
        <div className={styles.backup_container}>
          <div className={styles.custome_bcakupBtn} onClick={backuphandel}>
            <div className={styles.btn_iconWrapper}>
              {" "}
              <IoMdCloudDownload />{" "}
            </div>
            <div className={styles.custome_btnText}>{backuptitle}</div>
          </div>
        </div>{" "}
        <div className={styles.restore_container}>
          <form onSubmit={restorehandel} className={styles.form_container}>
            <div>
              <input
                type="file"
                id="backupFile"
                name="backupFile"
                accept=".json"
                onChange={handleFileChange}
                required
                className={styles.uplod_input}
                ref={fileInputRef}
              />
            </div>

            <div className={styles.custome_btn} onClick={handleChooseFile}>
              <div className={styles.btn_iconWrapper}>
                <IoMdCloudDownload />{" "}
              </div>
              <div type="submit" className={styles.submit_btn}>
                {file ? file.name : "Choose Backup File"}
              </div>
            </div>

            <div className={styles.custome_btn}>
              <div className={styles.btn_iconWrapper}>
                <IoMdCloudDownload />{" "}
              </div>
              <button type="submit" className={styles.submit_btn}>
                Restore Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
