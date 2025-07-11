import React from "react";
const Projects = ({ darkMode }) => {
  return (
    <div className="projects-section container py-5">
      <h2 className="text-center mb-4">💼 Moje projekty</h2>
      <p className={`text-center ${darkMode ? "text-light" : "text-dark"}`}>
        Przykładowe aplikacje i projekty zrealizowane w ramach nauki
      </p>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📝 To-Do App</h5>
              <p className="card-text">
                Prosta aplikacja do zarządzania zadaniami stworzona w React z
                użyciem Hooków.
              </p>
              <a
                href="https://github.com/Kam9521/todo-react"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🔐Szyfr Cezara</h5>
              <p className="card-text">
                Prosty projekt szyfrujący tekst przy użyciu klasycznego
                algorytmu Cezara - idealny do nauki podstaw kryptografii i pracy
                z formularzami w React.
              </p>
              <a
                href="https://github.com/Kam9521/szyfr-cezara"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">👦 my-portfolio</h5>
              <p className="card-text">
                Pierwsza wersja mojej strony portfolio, zbudowana w HTML i CSS.
                Prosty, statyczny projekt pokazujący podstawy tworzenia stron
                internetowych.
              </p>
              <a
                href="https://github.com/Kam9521/my-portfolio"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🧠node-express-notes-api</h5>
              <p className="card-text">
                Backendowe API do tworzenia i zarządzania notatkami, stworzone w
                Node.js i Express. Projekt pokazuje podstawy REST, routingu i
                pracy z serwerem.
              </p>
              <a
                href="https://github.com/Kam9521/node-express-notes-api"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🎨frontend-portfolio</h5>
              <p className="card-text">
                Nowoczesna wersja mojego portfolio stworzona w React. Projekt
                skupia się na estetyce ,responsywnosci i komponentach UI.
              </p>
              <a
                href="https://github.com/Kam9521/frontend-portfolio"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">☕ Java001</h5>
              <p className="card-text">
                Pierwsze kroki w języku Java - zestaw podstawowych ćwiczeń,
                pętli i klas. Projekt stworzony na początku nauki backendu.
              </p>
              <a
                href="https://github.com/Kam9521/Java001"
                style={{ wordBreak: "break-word" }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                Zobacz na GitHub 🧷
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
