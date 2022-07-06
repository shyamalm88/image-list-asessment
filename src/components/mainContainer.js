import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ImageContainerComp from "./imageContainer";
import "./main.css";

const MainComp = ({ imagesList }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);

  const clickHandler = (event, data) => {
    setImage(data);
  };

  const hideModal = () => {
    setImage(null);
  };
  useEffect(() => {
    let allImages = [];
    for (const property in imagesList) {
      const category = imagesList[property];
      for (let i = 0; i < category.length; i++) {
        allImages.push(category[i]);
      }
    }
    setImages(allImages);
  }, [imagesList]);
  return (
    <React.Fragment>
      <div className="col-md-9 main">
        <div className="p-2">
          <div className="container-fluid">
            <div className="row">
              {images.map((x) => {
                return (
                  <ImageContainerComp
                    imageData={x}
                    key={x.text}
                    clickHandler={clickHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {image && (
        <div className="overlay">
          <div className="modalBody">
            <button className="modalClose" onClick={hideModal}>
              X
            </button>
            <img src={image.image} alt={image.text} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MainComp;
