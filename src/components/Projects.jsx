import React from "react";
const Projects = () => {
  return (
    <div className="projects-section container py-5">
      <h2 className="text-center mb-4">💼 Moje projekty</h2>
      <p className="text-center text-muted">
        Przykładowe aplikacje i projekty zrealizowane w ramach nauki
      </p>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📝 To-Do App</h5>
              <p className="card-text">
                Prosta aplikacja do zarządzania zadaniami stworzona w React z
                użyciem localStorage.
              </p>
              <a
                href="https://github.com/Kam9521/to-do-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📁 Notatnik (FullStack)</h5>
              <p className="card-text">
                Frontend + Beckend: aplikacja do tworzenia notatek z użyciem
                Express.js i Reacta.
              </p>
              <a
                href="https://github.com/Kam9521/fullstack-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📊 Dashboard DevHackStack</h5>
              <p className="card-text">
                Aktualny projekt portfolio z dynamicznymi komponentami, ciemnym
                motywem i responsywnym layoutem.
              </p>
              <a
                href="https://gitgub.com/Kam9521/devhackstack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Zobacz na GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
