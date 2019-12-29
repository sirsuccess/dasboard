import React from "react";
import MenuData from "../../data/menuData";
import { NavLink } from "react-router-dom";
import Invoice from "./invoice/invoice";

import "./sidebar.css";

function Sidebar() {
  const MapData = data => {
    return data.map((item, index) => {
      return (
        <NavLink
          to={item.link}
          key={index}
          className={item.title === "OverView" ? "active" : ""} style={{ textDecoration: 'none' }}
        >
          {" "}
          <li className="sidebarLI">
            <img
              src={item.icon}
              alt="icon"
              style={{ width: 20, marginRight: "2em" }}
            />
            {item.title}
          </li>
        </NavLink>
      );
    });
  };
  return (
    <div className="sidebar">
      <Invoice />
      <div className="menuItem">Main</div>
      {MapData(MenuData.menu)}
      <div className="menuItem">Payments</div>
      {MapData(MenuData.Payments)}
      <div className="menuItem"> Orders </div>
      {MapData(MenuData.Orders)}
      <div className="menuItem"> </div>
      {MapData(MenuData.Profile)}
    </div>
  );
}

export default Sidebar;
