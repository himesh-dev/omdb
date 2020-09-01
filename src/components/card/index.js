import React from "react";
import "./card.css";
import { useSelector, useDispatch } from "react-redux";

import Poster from "../poster";
import { setFavData } from "../../redux/slice";
import { setLocalStorage } from "../../api/apiModule";

const Card = (props) => {
  const { Poster: poster_src, Title, Type, Year, imdbID } = props.data;
  const { favouriteData } = useSelector((state) => state.slice);
  const dispatch = useDispatch();
  const index = favouriteData.findIndex((el) => el.imdbID === imdbID);
  const label = index === -1 ? "Add" : "Remove";

  const addToFav = (e) => {
    e.stopPropagation();
    let updatedFavData = [...favouriteData];
    if (label === "Add") {
      updatedFavData.push(props.data);
      dispatch(setFavData(updatedFavData));
    } else {
      updatedFavData.splice(index, 1);
      dispatch(setFavData(updatedFavData));
    }
    setLocalStorage("fav", JSON.stringify(updatedFavData));
  };
  return (
    <div className="card-container" onClick={() => {}}>
      <div className="poster-container">
        <Poster src={poster_src} />
      </div>
      <div className="card-details-container">
        <h5>{Type.toUpperCase()}</h5>
        <h3>{Title}</h3>
        <p>{Year}</p>
      </div>
      <button onClick={addToFav}>{label}</button>
    </div>
  );
};
export default Card;
