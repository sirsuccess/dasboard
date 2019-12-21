import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressLine = (props) => {
  return (
    <div>
     <div class="w3-yellow w3-round-xlarge">
    <div class="w3-container w3-blue w3-round-xlarge" style={{width:"25%"}}>25%</div>
  </div>
    </div>
  );
};



export default ProgressLine;