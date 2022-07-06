import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./header.css";

const HeaderComp = ({ onEnter }) => {
  const [value, setValue] = useState("");

  const onSearchHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="border-bottom">
      <div className="col-md-12">
        <div className="mx-auto py-1">
          <div className="searchContainer">
            <input
              type="text"
              className="form-control"
              placeholder="Search Here"
              value={value}
              onChange={onSearchHandler}
              onKeyUp={(e) => onEnter(e, value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
