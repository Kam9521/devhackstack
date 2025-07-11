import React from "react";
import { Link } from "react-router-dom";

const Informacje = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">O projekcie</h1>
      <p>
        Projekt <strong>DevHackStack</strong> to nowoczesna platforma stworzona
        przez pasjonata IT, łącząca frontend, backend i cyberbezpieczeństwo.
      </p>
      <p>
        Celem strony jest prezentacja umiejętności technicznych oraz
        udostępnienie narzędzi i wiedzy dla osób zainteresowanych światem
        bezpieczeństwa cyfrowego, programowania i tworzenia aplikacji.
      </p>

      <hr className="my-4" />

      <h2 className="mb-3">Użyte technologie</h2>
      <ul>
        <li>React.js</li>
        <li>Bootstrap 5</li>
        <li>Express.js + MongoDB</li>
        <li>EmailJS</li>
        <li>Kali Linux + DVWA</li>
        <li>GitHub</li>
      </ul>

      <hr className="my-4" />

      <h2 className="mb-3">Oferta usług</h2>
      <p>Oferuję tworzenie:</p>
      <ul>
        <li>Stron wizytówek</li>
        <li>Portfolio i blogów</li>
        <li>Paneli administracyjnych</li>
        <li>Prostych sklepów internetowych</li>
      </ul>
      <p>
        Formularz kontaktowy znajduje się na stronie{" "}
        <Link to="/kontakt">Kontakt</Link>. Skontaktuj się, by stworzyć coś
        wyjątkowego! 🚀
      </p>
    </div>
  );
};

export default Informacje;
