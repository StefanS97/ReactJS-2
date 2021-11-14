import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const makeTogglerObject = (len) => {
  let togglerObject = {};
  for (let i = 0; i < len; i++) {
    togglerObject[i] = false;
  }
  return togglerObject;
};

const changeTogglerObject = (len, id) => {
  let togglerObject = {};
  for (let i = 0; i < len; i++) {
    if (i !== id - 1) {
      togglerObject[i] = false;
    } else {
      togglerObject[i] = true;
    }
  }
  return togglerObject;
};

function App() {
  const togglerObject = makeTogglerObject(data.length);
  const [togglerState, setTogglerState] = useState(togglerObject);

  const togglerHandler = (id) => {
    setTogglerState(changeTogglerObject(data.length, id));
  };

  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <div>
          <ul>
            {data.map((question) => (
              <li key={question.id} className="question">
                <SingleQuestion
                  {...question}
                  toggle={togglerState[question.id - 1]}
                  onToggle={togglerHandler}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
