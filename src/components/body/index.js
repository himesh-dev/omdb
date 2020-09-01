import React from "react";
import { useSelector } from "react-redux";
import Card from "../card";
import "./body.css";

const Body = () => {
  const { allData, error, favouriteData, page } = useSelector(
    (state) => state.slice
  );
  let displayData = page === "home" ? [...allData] : [...favouriteData];
  let text =
    page === "home"
      ? "Search Movies, Series or Episodes"
      : "No Media has been added to favourites";
  return (
    <div className="body">
      {displayData.length ? (
        displayData.map((data) => <Card key={data.imdbID} data={data} />)
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <h1>{text}</h1>
      )}
    </div>
  );
};

export default Body;
