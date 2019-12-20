import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboardBody">
        <div className ="dashboadLeft"><Sidebar /></div>
        <div className ="dashboadRight">Body</div>
      </div>
      
      
    </div>
  );
}

export default App;
