import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./navRight.css";

function NavRight() {
  const [open, setOpen] = useState(false);

  const handleclose = () => {
    if (open) {
      return setOpen(!open);
    }
  };

  const handleOpen = () => {
    return setOpen(!open);
  };
  return (
    <>
      <ul className="normalHandburgger">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>Support</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>FAQ</li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>
            <img
              src={"./assets/icons/bell.svg"}
              alt="Bell icon"
              className="Bell"
              style={{ width: 20 }}
            />{" "}
            <div className="dot">8</div>
          </li>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className="profileLI">
            <div className="profileName">
              <div className="hello">Hello </div>
              <div className="name">Oluwaleke Ojo</div>
            </div>
            <img
              src={"./assets/img/profile-img.png"}
              alt="Bell icon"
              style={{ width: 30, marginLeft: "1em" }}
            />
          </li>
        </Link>
      </ul>

      <div className="handburger" onClick={handleclose}>
        <Side className={open ? "open" : ""}>
          <ul className={open ? "open" : ""}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>Support</li>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>FAQ</li>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>
                <img
                  src={"./assets/icons/bell.svg"}
                  alt="Bell icon"
                  className="Bell"
                  style={{ width: 20 }}
                />{" "}
                <div className="dot">8</div>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li className="profileLI">
                <div className="profileName">
                  <div className="hello">Hello </div>
                  <div className="name">Amani Kanu</div>
                </div>
                <img
                  src={"./assets/img/profile-img.png"}
                  alt="Bell icon"
                  style={{ width: 30, marginLeft: "1em" }}
                />
              </li>
            </Link>
          </ul>
        </Side>
      </div>
      <Handburger onClick={handleOpen} className={open ? "top" : ""}>
        <Line className={`${open ? "line-color line1" : ""} `} />
        <Line className={`${open ? "line-color line2" : ""} `} />
        <Line className={`${open ? "line-color line3" : ""} `} />
      </Handburger>
    </>
  );
}

export default NavRight;

const Side = styled.div`
  @media screen and (max-width: 750px) {
    position: fixed;
    left: -250px;
    display: block;
    background-color: #000;
  }
`;
const Handburger = styled.div`
  @media screen and (min-width: 751px) {
    display: none;
  }
  cursor: pointer;
  .top {
    z-index: 9;
    position: fixed;
  }
  .line-color {
    background-color: white;
  }
  .line1 {
    transform: rotate(45deg);
    position: absolute;
    background-color: #000;
  }
  .line2 {
    display: none;
  }
  .line3 {
    transform: rotate(-45deg);
    position: absolute;
    background-color: #000;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background-color: #000;
  margin: 2px;
  .line-color {
    background-color: black;
    transform: translateX(45);
  }
`;
