import { NavLink } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
  return (
    <div>
      <h2 className="nav-label">MENU</h2>

      <NavLink 
        to="/" 
        className={({ isActive }) => 
          "nav-link" + (isActive ? " active" : "")
        }
      >
        Buku
      </NavLink>

      <NavLink 
        to="/stats" 
        className={({ isActive }) => 
          "nav-link" + (isActive ? " active" : "")
        }
      >
        Statistik
      </NavLink>
    </div>
  );
}
