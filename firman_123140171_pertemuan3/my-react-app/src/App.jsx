import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Manager</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/stats">Stats</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  );
}
