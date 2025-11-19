import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={`sidebar ${collapse ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? ">>" : "<< Collapse"}
      </button>

      {!collapse && <h2>MENU</h2>}

      <Link to="/">Buku</Link>
      <Link to="/stats">Statistik</Link>
    </div>
  );
}
