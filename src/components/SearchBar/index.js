import React from "react";
import SearchInput from "../searchInput";
import TypeSelector from "../typeSelector";
import "./searchbar.css";

const Head = () => {
  return (
    <div className="search-container">
      <TypeSelector />
      <SearchInput />
    </div>
  );
};

export default Head;
