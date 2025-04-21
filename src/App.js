import React, { useState } from "react";
import ChatBot from "./ChatBot";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button
        className="btn btn-primary chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && <ChatBot onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
