import React from 'react';

import './navLeft.css';

function NavRight() {
  return (
    <div className="navRight">
      <div className="brand">
        TransMonitor
      </div>
        <img src={"./assets/icons/search.svg"} alt="search icon" style={{width:20}}/>
        <input type="tex" placeholder="Search ..."/>
    </div>
  );
}

export default NavRight;
