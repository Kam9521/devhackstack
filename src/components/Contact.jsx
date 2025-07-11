import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqq0w65", 
        "template_zoxhgnn", 
        form.current,
        "UCvsfoapmH1Mdf3_P" 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Wiadomość została wysłana!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("❌ Coś poszło nie tak...");
        }
      );
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-3">📮 Skontaktuj się ze mną</h2>
        <p className="text-center mb-2">
          Masz pomysł na stronę internetową, aplikację webową lub projekt IT? 🚀
          <br />
          Chętnie pomogę Ci go zrealizować! Oferuję tworzenie nowoczesnych,
          responsywnych stron
          <br />i aplikacji z wkorzystaniem technologii takich jak React,
          Node.js i wiele innych.
        </p>
        <p className="text-center mb-4">
          ☎️ Możesz też zadzwonić:{" "}
          <strong>
            <a href="tel:693473094">693 473 094</a>
          </strong>
          <br />
          lub wypełnij formularz poniżej:
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Imię i nazwisko
            </label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adres e-mail
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Temat
            </label>
            <input
              type="text"
              name="subject"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Treść wiadomości
            </label>
            <textarea
              name="message"
              rows="5"
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Wyślij wiadomość
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
