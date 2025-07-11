import React from "react";

function Zamow({ darkMode }) {
  return (
    <div className={'container mt-5 text-$ {darkMode ? "light" : "dark"}'}>
      <h2 className="text-3xl font-bold mb-4">Zamów stronę internetową</h2>
      <p className="mb-4">
        Potrzebujesz profesjonalnej, nowoczesnej i bezpiecznej strony
        internetowej? Zajmuję się tworzeniem witryn, aplikacji oraz dashboardów
        — zarówno prostych wizytówek, jak i rozbudowanych projektów z backendem.
      </p>

      <p className="mb-4">
        Wybierz jeden z gotowych pakietów lub skontaktuj się ze mną, aby ustalić
        indywidualne warunki współpracy.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Strona Wizytówka</strong> – nowoczesna strona + responsywność
        </li>
        <li>
          <strong>Portfolio lub CV</strong> – idealna dla freelancerów i
          kandydatów do pracy
        </li>
        <li>
          <strong>Strona z blogiem</strong> – CMS, wpisy, sekcja komentarzy
        </li>
        <li>
          <strong>Dashboard / aplikacja webowa</strong> – panel zarządzania,
          backend, API
        </li>
        <li>
          <strong>Strona dla Twojej firmy</strong> – kontakt, usługi, mapa,
          oferta PDF
        </li>
      </ul>

      <p className="mb-4">
        <strong>📄 Formularz zamówienia</strong> do pobrania w wersji PDF:
      </p>
      <p className="mt-6">
        📬 Masz pytania? Przejdź do{" "}
        <Link to="/kontakt" className="text-blue-400 underline">
          formularza kontaktowego
        </Link>
        .
      </p>
      <div className="mt-6 text-center">
        <a
          href="/formularz-zamowienia.pdf"
          download
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          📄 Pobierz formularz zamówienia (PDF)
        </a>
      </div>
    </div>
  );
}

export default Zamow;
