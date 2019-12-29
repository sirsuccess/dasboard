import React from "react";
import "./search.css"

function Search({placeholder, borderBottom}) {
  
  return (
    <div className="search" style={{borderBottom}}>
              <img
                src={"./assets/icons/search.svg"}
                alt="search icon"
                style={{ width: 25 }}
              />{" "}
              <input
                type="text"
                placeholder={placeholder}
               
              />
            </div>
  );
}

export default Search;
