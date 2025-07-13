import React from "react";

const Polityka = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Polityka prywatności</h1>
      <p className="mb-4">
        Niniejsza polityka prywatności opisuje, w jaki sposób gromadzimy,
        przechowujemy i wykorzystujemy dane użytkowników korzystających z naszej
        strony DevHackStack.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Gromadzenie danych</h2>
      <p className="mb-4">
        Nie gromadzimy żadnych danych osobowych, chyba że użytkownik dobrowolnie
        je udostępni (np. poprzez formularz kontaktowy lub opinię).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Wykorzystanie danych
      </h2>
      <p className="mb-4">
        Dane są wykorzystywane wyłącznie do realizacji funkcjonalności serwisu
        (np. wyświetlanie opinii, odpowiedź bota AI).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Pliki cookies</h2>
      <p className="mb-4">
        Strona może wykorzystywać pliki cookies wyłącznie w celach technicznych
        (np. zapamiętanie preferencji motywu).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Kontakt</h2>
      <p>
        W razie pytań dotyczących polityki prywatności, prosimy o kontakt przez
        formularz kontaktowy dostępny na stronie.
      </p>
    </div>
  );
};

export default Polityka;
