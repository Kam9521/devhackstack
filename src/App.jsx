import GlobalHackMap from "./components/GlobalHackMap.jsx";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`w-100 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }min-vh-100`}
      style={{ overflowX: "hidden" }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">
          DevHackStack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projekty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container py-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn btn-secondary mb-3"
        >
          {darkMode ? "☀️ Jasny motyw" : "🌙 Tryb Dark Web"}
        </button>

        <Dashboard darkMode={darkMode} />
        <GlobalHackMap />
      </div>
    </div>
  );
}

export default App;
