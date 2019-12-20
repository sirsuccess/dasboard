import React from 'react';
import NavLeft from "./navLeft/navLeft"
import NavRight from "./navRight/navRight"

import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      
        <NavLeft/>
        <NavRight/>
         
        
    
    </div>
  );
}

export default Navbar;
