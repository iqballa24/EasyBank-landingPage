import React from "react";
import ImgConstruction from "../assets/img/construction.svg";

const NotFound = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={ImgConstruction}
        alt="web under construction"
        loading="lazy"
        style={{
          width: "100%",
          maxWidth: "50rem",
        }}
      />
    </div>
  );
};

export default NotFound;
