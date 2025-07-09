import ThreatPieChart from "./ui/ThreatPieChart";
import { FaBug, FaLock, FaShieldAlt, FaEnvelope, FaBomb } from "react-icons/fa";
import React from "react";
import { Card, CardContent } from "./ui/card.jsx";
const ThreatDashboard = ({ darkMode }) => {
  const threatStats = {
    active: 8,
    critical: 3,
    phishing: 2,
    ransomware: 1,
    bruteforce: 2,
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Zagrożeń</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          className={
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-dark border-gray-300"
          }
        >
          <CardContent>
            <div className="flexitems-center gap-4">
              <FaShieldAlt className="text-blue-500" size={24} />
              <div>
                <p className="text-sm text-gray-500">Zagrożenie aktywne</p>
                <p className="text-xl font-bold">{threatStats.active}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className={
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-dark border-gray-300"
          }
        >
          <CardContent>
            <div className="flexitems-center gap-4">
              <FaBug className="text-red-500" size={24} />
              <div>
                <p className="text-sm text-gray-500">Zagrożenie krytyczne</p>
                <p className="text-xl font-bold">{threatStats.critical}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className={
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-dark border-gray-300"
          }
        >
          <CardContent>
            <div className="flexitems-center gap-4">
              <FaEnvelope className="text-yellow-500" size={24} />
              <div>
                <p className="text-sm text-gray-500">Phishing</p>
                <p className="text-xl font-bold">{threatStats.phishing}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className={
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-dark border-gray-300"
          }
        >
          <CardContent>
            <div className="flexitems-center gap-4">
              <FaBomb className="text-purple-500" size={24} />
              <div>
                <p className="text-sm text-gray-500">Ransomware</p>
                <p className="text-xl font-bold">{threatStats.ransomware}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className={
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-dark border-gray-300"
          }
        >
          <CardContent>
            <div className="flexitems-center gap-4">
              <FaLock
                className={darkMode ? "text-gray-100" : "text-gray-700"}
                size={24}
              />
              <div>
                <p className="text-sm text-gray-500">Brute Force</p>
                <p className="text-xl font-bold">{threatStats.bruteforce}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <ThreatPieChart />
      </div>
    </div>
  );
};
export default ThreatDashboard;
