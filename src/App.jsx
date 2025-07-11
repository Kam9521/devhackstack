import Zamow from "./components/Zamow.jsx";
import Informacje from "./components/Informacje.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import GlobalHackMap from "./components/GlobalHackMap.jsx";
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);
  return (
    <Router>
      <div style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">
              DevHackStack
            </Link>

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
                  <Link className="nav-link" to="/">
                    Strona Główna
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projekty">
                    Projekty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/informacje">
                    Informacje
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kontakt">
                    Kontakt
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/zamow">
                    Zamów stronę
                  </Link>
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

            <Routes>
              <Route path="/" element={<Dashboard darkMode={darkMode} />} />
              <Route
                path="/projekty"
                element={<Projects darkMode={darkMode} />}
              />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/mapa" element={<GlobalHackMap />} />
              <Route path="/informacje" element={<Informacje />} />
              <Route path="/zamow" element={<Zamow />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
