"use client";
import React, { useState } from "react";
import styles from "./css/searchBar.module.css";
import SuggestList from "./SuggestList";
export default function SearchBar(props) {
  const { allList, filedName } = props;
  const [newValue, setnewValue] = useState("");
  const [fillterList, setfillterList] = useState([]);
  const [searchedValue, setsearchedValue] = useState("");
  const [slugvalue, setslugvalue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setnewValue(value);

    if (value.length >= 3) {
      const filtered = allList.filter((tag) =>
        tag[filedName].toLowerCase().includes(value.toLowerCase())
      );
      console.log(filtered);
      setfillterList(filtered);
    } else {
      setfillterList([]);
    }
  };

  const handleTagClick = (text, slug) => {
    console.log("slug", slug);
    setnewValue(text); // Clear the input field
    setfillterList([]); // Clear the filtered dropdown
  };

  return (
    <div className={styles.input_wrapper}>
      <input
        type="text"
        value={newValue}
        placeholder="search...."
        className={styles.input}
        onChange={handleInputChange}
      />
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
