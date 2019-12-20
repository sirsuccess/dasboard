import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import DashboardBody from "./components/dashboardBody/dashboardBody"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboardBody">
        <div className ="dashboadLeft"><Sidebar /></div>
        <div className ="dashboadRight"><DashboardBody/></div>
      </div>
      
      
    </div>
  );
}

export default App;
