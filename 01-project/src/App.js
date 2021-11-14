import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clickHandler = (event) => {
    event.preventDefault();

    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length || 0} birthdays today</h3>
        <List people={people} />
        <button onClick={clickHandler}>Clear reminders</button>
      </section>
    </main>
  );
}

export default App;
