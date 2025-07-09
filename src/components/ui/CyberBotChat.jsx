import React, { useState } from "react";
const CyberBotChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Witaj! Zadaj pytanie dotyczące hackingu lub programowania.",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newUserMessage = { role: "user", text: input };
    const newBotMessage = { role: "bot", text: "Przykładowa odpowiedź bota." };
    setMessages([...messages, newUserMessage, newBotMessage]);
    setInput("");
  };
  return (
    <div className="card shadow p-3 mb-4 bg-white rounded">
      <h4 className="mb-3">🤖 CyberBot AI Chat</h4>
      <div
        className="chat-box border p-3 mb-3"
        style={{ height: "300px", overflowY: "auto", background: "#f9f9f9" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === "user" ? "text-end" : "text-primary"
            }`}
          >
            <strong>{msg.role === "user" ? "Ty:" : "CyberBot"} </strong>{" "}
            {msg.text}{" "}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="from-control"
          placeholder="Napisz wiadomość..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
};
export default CyberBotChat;
