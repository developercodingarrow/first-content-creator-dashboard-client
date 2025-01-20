"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./page.module.css";
import { API_BASE_URL } from "../../../../../config";
import { IoMdCloudDownload } from "../../../../_components/ApplicationIcons";
export default function FullBackupwrapper() {
  const [file, setFile] = useState(null); // State to store the selected file
  const [message, setMessage] = useState(""); // State to store the message

  const fileInputRef = useRef(null);
  const handleFullBackupsData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/backup/full-backup`);

      // Ensure the response is OK
      if (!response.ok) {
        throw new Error("Failed to download backup");
      }

      const blob = await response.blob(); // Fetch the `.zip` file as a blob

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Set the file name to download
      link.setAttribute("download", "full-backup.zip");

      // Append link, trigger download, and clean up
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the ZIP backup:", error);
    }
  };

  const handleRestoreFullsData = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a backup file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("backup", file); // Key matches multer config

      const response = await fetch(`${API_BASE_URL}/backup/full-restore`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("resposnes---", data);

      if (response.ok) {
        setMessage(data.message || "Restore completed successfully!");
      } else {
        setMessage(data.message || "Failed to restore data.");
      }
    } catch (error) {
      setMessage("Error restoring backup: " + error.message);
    }
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Save the selected file to state
    setMessage(""); // Clear any previous message
  };

  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.box_heading}>
        <h2>Full Backup</h2>
      </div>
      <div className={styles.inner_wrraper}>
        <div className={styles.backup_container}>
          <div
            className={styles.custome_bcakupBtn}
            onClick={handleFullBackupsData}
          >
            <div className={styles.btn_iconWrapper}>
              {" "}
              <IoMdCloudDownload />{" "}
            </div>
            <div className={styles.custome_btnText}>Full Backup</div>
          </div>
        </div>
        <div className={styles.restore_container}>
          <form onSubmit={handleRestoreFullsData} className={styles.form_style}>
            {/* File Input */}
            <input
              type="file"
              id="backupFile"
              name="backupFile"
              accept=".zip"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <div className={styles.custome_btn} onClick={handleChooseFile}>
              <div className={styles.btn_iconWrapper}>
                <IoMdCloudDownload />{" "}
              </div>

              <div type="submit" className={styles.submit_btn}>
                {file ? file.name : "Choose Backup File"}
              </div>
            </div>
            {/* Submit Button */}
            <button className={styles.restore_btn} type="submit">
              Restore Backup
            </button>
          </form>
          {/* Display Message */}
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
