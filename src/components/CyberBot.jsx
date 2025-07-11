import { Card, CardContent } from "./ui/card";
import { Robot } from "react-bootstrap-icons";
import React from "react";
import { Card, CardContent } from "./ui/card";
const CyberBot = ({ darkMode }) => {
  return (
    <Card
      className={`mb-4 shadow-lg border $ {darkMode ? "bg-gray-900 text-white border-gray-700"
         : "bg-white text-dark border-gray-300"}`}
    >
      <CardContent>
        <div className="flex items-center mb-3">
          <Robot
            size={50}
            className={`mr-3 ${darkMode ? "text-white" : "text-dark"}`}
          />
          <h2 className="text-2xl font-bold ">CyberBot - Twój AI mentor</h2>
        </div>
        <p className="text-gray-300">
          Witaj! Jestem twoim cybernetycznym mentorem. Każdego dnia dostarczę Ci
          nową poradę , ciekawostkę lub pytanie związane z programowaniem i
          cyberbezpieczeństwem.
        </p>
        <div className="mt-4 p-3 bg-gray-800 border-1-4 border-green-400 font-mono text-sm text-gray-100 rounded-md">
          <strong className="text-green-400">📣Dziś:</strong> Używaj{" "}
          <code>nmap -sV</code> do wykrywania usług i wersji oprogramowania.
        </div>
      </CardContent>
    </Card>
  );
};
export default CyberBot;
