import React from "react";
function Tools() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Narzędzia Hakera</h2>
      <div className="row">
        {/* Nmap */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nmap</h5>
              <p className="card-text">
                Skanowanie portów i sieci - fundament rekonesansu.
              </p>
            </div>
          </div>
        </div>
        {/* Wireshark */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Wireshark</h5>
              <p className="card-text">
                Analizator pakietów - podsłuch ruchu w czasie rzeczywistym.
              </p>
            </div>
          </div>
        </div>
        {/* Metasploit */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Metasploit</h5>
              <p className="card-text">
                Potężna platforma do testów penetracyjnych i exploitów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tools;
