import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (+count <= 0) {
      setText(data.slice(0, 1));
    } else if (+count > 0 && +count < data.length) {
      setText(data.slice(0, +count));
    } else {
      setText(data);
    }
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          step="1"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
