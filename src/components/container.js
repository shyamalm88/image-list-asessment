import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import data from "../data/data";
import HeaderComp from "./header";
import MainComp from "./mainContainer";
import SidebarComp from "./sidebar";

const Container = () => {
  const [imagesData, setImagesData] = useState(null);
  const [sidebarData, setSidebarData] = useState([]);

  Object.filter = (obj, predicate) =>
    Object.fromEntries(Object.entries(obj).filter(predicate));

  const sidebarClickHandler = (event, value) => {
    if (sidebarData.includes(value)) {
      for (let prop in data) {
        if (prop === value) {
          const filtered = Object.filter(
            data,
            ([name, data]) => name === value
          );
          setImagesData(filtered);
        }
      }
    } else {
      setImagesData(null);
    }
  };

  const onEnterHandler = (event, value) => {
    if (event.key === "Enter") {
      if (sidebarData.includes(value)) {
        for (let prop in data) {
          if (prop === value) {
            const filtered = Object.filter(
              data,
              ([name, data]) => name === value
            );
            setImagesData(filtered);
          }
        }
      } else {
        setImagesData(null);
      }
    }
    if (value.length === 0) {
      setImagesData(data);
    }
  };

  useEffect(() => {
    if (data) {
      let keys = Object.keys(data);
      setSidebarData(keys);
      setImagesData(data);
    }
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="row">
        <HeaderComp onEnter={onEnterHandler} />
        <div className="col-md-12">
          <div className="container-fluid">
            <div className="row">
              <SidebarComp
                sidebarData={sidebarData}
                sidebarClick={sidebarClickHandler}
              />
              {imagesData ? (
                <MainComp imagesList={imagesData} />
              ) : (
                "No Data Found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
