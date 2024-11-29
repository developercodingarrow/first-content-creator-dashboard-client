"use client";
import React, { useState } from "react";
import styles from "./css/chipselector.module.css";
import SuggestList from "@/_components/search_elements/SuggestList";
import SimpleInput from "../elements/formelements/SimpleInput";
export default function ChipSelector(props) {
  const { allList, filedName, placeholder } = props;
  const [newValue, setnewValue] = useState("");
  const [fillterList, setfillterList] = useState([]);
  const [list, setlist] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setnewValue(value);

    if (value.length >= 3) {
      const filtered = allList.filter((tag) =>
        tag[filedName].toLowerCase().includes(value.toLowerCase())
      );
      setfillterList(filtered);
    } else {
      setfillterList([]);
    }
  };

  const handleTagClick = (text, slug) => {
    if (!tags.includes(text)) {
      setTags([...tags, text]); // Add to the tags array if it's not already present
    }
    setnewValue(""); // Clear the input field
    setfillterList([]); // Clear the filtered dropdown
  };

  const removeTag = (tagToRemove) => {
    console.log(tagToRemove);
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.container}>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.chip}>
              {tag}
              <span
                className={styles.removeChip}
                onClick={() => removeTag(tag)}
              >
                &times;
              </span>
            </div>
          ))}
          <div className={styles.input_wrapper}>
            <input
              type="text"
              value={newValue}
              placeholder={placeholder}
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {fillterList.length > 0 && (
        <SuggestList
          filterData={fillterList}
          filedName={filedName}
          itemClickhandel={handleTagClick}
        />
      )}
    </div>
  );
}
