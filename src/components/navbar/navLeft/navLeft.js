import React from 'react';
import Search from "../../../commons/search/search"

import './navLeft.css';

function NavRight() {
  return (
    <div className="navLeft">
      <div className="brand">
        TransMonitor
      </div>
        <Search placeholder="Search...." />
    </div>
  );
}

export default NavRight;
