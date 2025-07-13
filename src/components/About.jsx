import { Link } from "react-router-dom";
import React from "react";
const About = () => {
  return (
    <div className="p-5 text-dark dark:text-white">
      <h2 className="text-3xl font-bold mb-4">O mnie</h2>
      <p className="mb-4">
        Cześć! Nazywam się Kamil i jestem pasjonatem programowania oraz
        cyberbezpieczeństwa. Od kiedy zacząłem swoją naukę, moim celem było
        stworzenie solidnego portfolio, które pokaże moje umiejętności i pomoże
        mi znależć pierwszą pracę w IT.
      </p>
      <p className="mb-4">
        Ten projekt - <strong>DevHackStack</strong> - to mój największy krok w
        stronę spełnienia marzeń. Łączy moją wiedzę z zakresu frontendu, backend
        oraz bezpieczeństwa IT.
      </p>
      <p className="mb-4">
        Dziękuję za odwiedzenie mojej strony! Jeśli masz pytania lub chcesz się
        skontaktować zajrzyj do sekcji {""}
        <Link
          to="/kontakt"
          className="text-blue-600 underline dark:text-blue-400"
        >
          Kontakt.
        </Link>
        <br />
        Będzie mi bardzo miło, jeśli zostawisz swoją opinię lub ocenę w sekcji{" "}
        {""}
        <Link
          to="/opinie"
          className="text-blue-600 underline dark:text-blue-400"
        >
          Opinie
        </Link>
        . Każda opinia jest mile widziana - krytyka uczy, a pochwała rozwija 💙
      </p>
    </div>
  );
};
export default About;
