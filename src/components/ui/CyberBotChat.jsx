import React, { useState } from "react";

const CyberBotChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Witaj! Zadaj pytanie dotyczące hackingu lub programowania.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/openai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply =
        data.choices?.[0]?.message?.content || "Brak odpowiedzi od AI.";
      const newBotMessage = { role: "bot", text: botReply };

      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Wystąpił błąd podczas łączenia z OpenAI API." },
      ]);
      console.error("OpenAI API error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow p-3 mb-4 bg-white text-dark dark:bg-zinc-900 dark:text-white rounded">
      <h4 className="mb-3">🤖 CyberBot AI Chat</h4>
      <div
        className="chat-box border p-3 mb-3 bg-gray-100 dark:bg-zinc-800 dark:text-white"
        style={{ height: "300px", overflowY: "auto" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.role === "user" ? "text-end" : ""}`}
          >
            <strong>{msg.role === "user" ? "Ty" : "CyberBot"}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Napisz wiadomość..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Czekaj..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
};

export default CyberBotChat;
