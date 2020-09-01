import React from "react";
import "./poster.css";
import image from "../../assets/photo.svg";


const Poster = ({ src }) => {
  return src && src !== "N/A" ? (
    <img
      className="poster"
      loading="lazy"
      height="240px"
      src={src}
      alt="Poster"
    />
  ) : (
    <div className="placeholder-image">
      <img src={image} height="50px" alt="poster" style={{ margin: "auto" }} />
    </div>
  );
};

export default Poster;
