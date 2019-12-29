import React from "react";
import NavLeft from "./navLeft/NavLeft";
import NavRight from "./navRight/NavRight";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLeft />
      <NavRight />
    </div>
  );
}

export default Navbar;
