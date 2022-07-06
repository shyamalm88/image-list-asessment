import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./sidebar.css";
import Slider from "./slider";
import ContainerContext from "../App";
import { useDispatch } from "react-redux";

const SidebarComp = ({ sidebarData, sidebarClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-3 sidebar">
      <div className="sidebarContainer">
        <ul>
          {sidebarData.map((x) => {
            return (
              <li key={x} onClick={(e) => sidebarClick(e, x)}>
                {x}
              </li>
            );
          })}
        </ul>
      </div>
      <Slider />
    </div>
  );
};

export default SidebarComp;
