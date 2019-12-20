import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          VELA DASHBOARD
        
      </header>
    </div>
  );
}

export default App;
