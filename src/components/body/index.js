import React from "react";
import { useSelector } from "react-redux";
import Card from "../card";
import "./body.css";

const Body = () => {
  const { allData, error, favouriteData, page, loading } = useSelector(
    (state) => state.slice
  );
  let displayData = page === "home" ? [...allData] : [...favouriteData];
  let text =
    page === "home"
      ? "Search Movies, Series or Episodes"
      : "No Media has been added to favourites";
  return (
    <div className="body">
      {loading ? (
        <h1>LOADING...</h1>
      ) : error && page === "home" ? (
        <h2>ERROR: {error}</h2>
      ) : displayData.length ? (
        displayData.map((data) => <Card key={data.imdbID} data={data} />)
      ) : (
        <h1>{text}</h1>
      )}
    </div>
  );
};

export default Body;
