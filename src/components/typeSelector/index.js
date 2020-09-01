import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./typeSelector.css";
import { setType } from "../../redux/slice";

const TypeSelector = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.slice);
  const options = [
    { key: "all", label: "ALL" },
    { key: "movie", label: "Movie" },
    { key: "series", label: "Series" },
    { key: "episode", label: "Episode" },
  ];
  const onChangeHandler = (e) => {
    dispatch(setType(e.target.value));
  };
  return (
    <select className="type-selector" onChange={onChangeHandler} value={type}>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TypeSelector;
