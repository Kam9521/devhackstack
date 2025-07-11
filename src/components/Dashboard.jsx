import PerformanceChart from "./PerFormanceChart";

import ExploitSimulator from "./ExploitSimulator";
import CyberBot from "./CyberBot";
import ThreatDashboard from "./ThreatDashboard";
import Tools from "./Tools";
import GlobalHackMap from "./GlobalHackMap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Dashboard({ darkMode }) {
  return (
    <div className="min-vh-100">
      <div className="container mt-5 px-3" style={{ overflowX: "hidden" }}>
        <h2 className="mb-4">Panel kontrolny</h2>
        <div className="row">
          {/*Users */}
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h5 className="card-title">Użytkownicy</h5>
                <p className="card-text display-6">1,284</p>
              </div>
            </div>
          </div>
          {/* Senssions */}
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Sesje</h5>
                <p className="card-text display-6">9,427</p>
              </div>
            </div>
          </div>
          {/* Errors */}
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-white bg-danger">
              <div className="card-body">
                <h5 className="card-title">Błędy</h5>
                <p className="card-text display-6">35</p>
                <small>Ostatnie 24h</small>
              </div>
            </div>
          </div>
          {/* Performance */}
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-white bg-dark">
              <div className="card bg-dark text-light p-3 shadow">
                <h4>Wydajność</h4>
                <PerformanceChart />
              </div>
            </div>
          </div>
        </div>
        <GlobalHackMap />
        <Tools />
        <ThreatDashboard darkMode={darkMode} />
        <CyberBot darkMode={darkMode} />

        <ExploitSimulator darkMode={darkMode} />
      </div>
    </div>
  );
}
export default Dashboard;
