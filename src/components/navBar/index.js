import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slice";
import "./navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const goToFav = () => {
    dispatch(setPage("fav"));
  };
  const goToHome = () => {
    dispatch(setPage("home"));
  };
  return (
    <div className="navbar-container">
      <div onClick={goToHome}>
        <h3>OMDb</h3>
      </div>
      <div>
        <button value="Favourites" onClick={goToFav}>
          Favourites
        </button>
      </div>
    </div>
  );
};

export default NavBar;
