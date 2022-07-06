import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import "./imageContainer.css";

const ImageContainerComp = ({ imageData, clickHandler }) => {
  const changeTheNumber = useSelector((state) => state.changeTheNumber / 100);
  console.log(changeTheNumber);
  return (
    <React.Fragment>
      <div className="col-md-3 mb-2" key={imageData.text}>
        <div className="cardImage" onClick={(e) => clickHandler(e, imageData)}>
          <img
            src={imageData.image}
            className="img"
            style={{ opacity: changeTheNumber }}
            alt={imageData.text}
          />
          <div className="text">{imageData.text}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageContainerComp;
