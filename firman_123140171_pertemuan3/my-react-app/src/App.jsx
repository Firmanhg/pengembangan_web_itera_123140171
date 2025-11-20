import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
  return (
    <Router>
      {}
      <div className="intro-beam"></div>

      <div className="app-root">
        
        {}
        <aside className="cp-sidebar">
          <Sidebar />
        </aside>

        {}
        <div className="workspace">
          
          {}
          <header className="cp-header">
            <Header />
          </header>

          {}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>

        </div>
      </div>

      {}
      <div id="cursor-follower"></div>
    </Router>
  );
}

export default App;
