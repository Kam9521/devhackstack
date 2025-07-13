import React, { useState, useEffect } from "react";

function Opinie() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [opinions, setOpinions] = useState([]);

  // Pobieranie opinii z backendu
  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setOpinions(data);
      } catch (err) {
        console.error("Błąd pobierania opinii:", err.message);
      }
    };

    fetchOpinions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formularz wysłany"); // <-- Debug

    if (!name || !comment || rating === 0) return;

    const newOpinion = { name, comment, rating };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOpinion),
      });

      if (!response.ok) {
        throw new Error("Nie udało się dodać opinii.");
      }

      const savedReview = await response.json();
      setOpinions([...opinions, savedReview]);

      // Czyść pola
      setName("");
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Błąd wysyłki:", err.message);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Zostaw swoją opinię</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          className="form-control mb-2"
          placeholder="Twoje imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Komentarz"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="mb-2">
          Ocena:{" "}
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              style={{
                cursor: "pointer",
                color: num <= rating ? "gold" : "#ccc",
                fontSize: "24px",
              }}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Wyślij opinię
        </button>
      </form>

      <h3>Opinie użytkowników</h3>
      {opinions.length === 0 ? (
        <p>Brak opinii.</p>
      ) : (
        <ul className="list-group">
          {opinions.map((op, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{op.name}</strong> ({"★".repeat(op.rating)})
              <p>{op.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Opinie;
