import React from 'react';
import {Link} from "react-router-dom"

import './navRight.css';

function NavRight() {
  return (
    
    <ul>
      
      <Link to="/"><li>Support</li></Link>
      <Link to="/"><li>FAQ</li></Link>
      <Link to="/"><li><img src={"./assets/icons/bell.svg"} alt="Bell icon" className="Bell" style={{width:20, }}/> <div className="dot">8</div></li></Link>
      <Link to="/"><li className="profileLI"><div className="hello">Hello </div>Amani Kanu<img src={"./assets/img/profile-img.png"} alt="Bell icon" style={{width:30, marginLeft:"1em"}}/></li></Link>
      
    </ul>
    
  );
}

export default NavRight;
