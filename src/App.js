import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "./api/apiModule";
import "./App.css";
import Head from "./components/SearchBar";
import Body from "./components/body";
import { setFavData } from "./redux/slice";
import NavBar from "./components/navBar";

function App() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.slice);
  useEffect(() => {
    const local_fav = getLocalStorage("fav");
    dispatch(setFavData(JSON.parse(local_fav)));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        {page === "home" ? <Head /> : null}
        <Body />
      </div>
    </div>
  );
}

export default App;
