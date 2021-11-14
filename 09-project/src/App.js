import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0000ff").all(10));

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  const inputChangeHandler = (event) => {
    setColor(event.target.value);
    error && setError(false);
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={error ? "error" : ""}
            type="text"
            value={color}
            onChange={inputChangeHandler}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} hex={color.hex} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
