"use client";
import React, { useEffect, useState, useContext } from "react";
import { API_BASE_URL } from "../../../../../config";
import styles from "./page.module.css";
import BackupComponent from "@/_components/backups/BackupComponent";
export default function BackupWrapper() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleBackupUserData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/backup/user-data`);
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "user-backup.json");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading backup:", error);
    }
  };

  // Handle form submission (restore data)
  const handleRestoreUserData = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a backup file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("backup", file);

      // Send the file to the backend API
      const response = await fetch(`${API_BASE_URL}/backup/restore-user-data`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("responese--", data);
      if (data.status === "Success") {
        setMessage("User data restored successfully!");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error restoring backup: " + error.message);
    }
  };

  const handleBackupBlogData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/backup/blog-data`);
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "blogs-backup.json");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading backup:", error);
    }
  };

  const handleRestoreBlogData = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a backup file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("backup", file);

      // Send the file to the backend API
      const response = await fetch(`${API_BASE_URL}/backup/restore-blog-data`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("responese--", data);
      if (data.status === "Success") {
        setMessage("User data restored successfully!");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error restoring backup: " + error.message);
    }
  };

  const handleBackupCommentsData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/backup/comments-data`);
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "comments-backup.json");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading backup:", error);
    }
  };

  const handleRestoreCommentsData = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a backup file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("backup", file);

      // Send the file to the backend API
      const response = await fetch(
        `${API_BASE_URL}/backup/restore-comments-data`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("responese--", data);
      if (data.status === "Success") {
        setMessage("User data restored successfully!");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error restoring backup: " + error.message);
    }
  };

  const handleBackupTagsData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/backup/tag-data`);
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "tags-backup.json");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading backup:", error);
    }
  };

  const handleRestoreTagssData = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a backup file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("backup", file);

      // Send the file to the backend API
      const response = await fetch(`${API_BASE_URL}/backup/restore-tag-data`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("responese--", data);
      if (data.status === "Success") {
        setMessage("User data restored successfully!");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error restoring backup: " + error.message);
    }
  };

  return (
    <div>
      <div className={styles.component_wrapper}>
        <BackupComponent
          backuptitle="User Backup"
          backuphandel={handleBackupUserData}
          restorehandel={handleRestoreUserData}
          file={file}
          setFile={setFile}
        />

        <BackupComponent
          backuptitle="Blog Backup"
          backuphandel={handleBackupBlogData}
          restorehandel={handleRestoreBlogData}
          file={file}
          setFile={setFile}
        />

        <BackupComponent
          backuptitle="Comments Backup"
          backuphandel={handleBackupCommentsData}
          restorehandel={handleRestoreCommentsData}
          file={file}
          setFile={setFile}
        />

        <BackupComponent
          backuptitle="Tags Backup"
          backuphandel={handleBackupTagsData}
          restorehandel={handleRestoreTagssData}
          file={file}
          setFile={setFile}
        />
      </div>
    </div>
  );
}
