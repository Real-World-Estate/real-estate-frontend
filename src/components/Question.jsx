import React, { useState } from "react";

function Question({ question, answer }) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <div className="section">
      <div className="question" onClick={() => setIsFaqOpen((prev) => !prev)}>
        <span>{question}</span>
        {isFaqOpen && <span>x</span>}
        {!isFaqOpen && <span>+</span>}
      </div>
      <p className={`answer ${isFaqOpen ? "open" : ""}`}>{answer}</p>
    </div>
  );
}

export default Question;
