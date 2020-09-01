import React, { useState } from "react";
import "./searchInput.css";

import { useDispatch } from "react-redux";
import { fetchAllData } from "../../redux/slice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const onInputHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setError("Enter text to search");
      return;
    }
    dispatch(fetchAllData(searchText));
  };
  return (
    <>
      <div className="searchbar-container">
        <form
          className="searchbar-form"
          onSubmit={onSubmitHandler}
          onBlur={() => setError(null)}
        >
          <input
            className="searchbar"
            type="text"
            value={searchText}
            onChange={onInputHandler}
            placeholder="Search Movies or TV shows"
          />
          <input type="submit" className="search-button" value="Search" />
        </form>
        {error ? <p className="error-text">{error}</p> : null}
      </div>
    </>
  );
};

export default SearchInput;
