import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  return (
    <Router>
      <div className="cyber-grid"></div>

      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Header />

          <div className="page-transition-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
