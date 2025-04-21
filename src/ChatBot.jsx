import React, { useState } from "react";

function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = { from: "bot", text: `You said: "${input}" 🤖` };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="chatbot-window shadow">
      <div className="chatbot-header d-flex justify-content-between align-items-center">
        <span>🤖 BotPenguin</span>
        <button className="btn-close btn-sm" onClick={onClose}></button>
      </div>

      <div className="chatbot-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input p-2 border-top d-flex align-items-center">
        <input
          type="text"
          className="form-control chat-input"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <span className="send-icon" onClick={sendMessage}>
          📤
        </span>
      </div>
    </div>
  );
}

export default ChatBot;
