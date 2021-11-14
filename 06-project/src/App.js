import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [details, setDetails] = useState([]);
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const tabs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
      setPerson(data[0]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    tabs();
  }, []);

  const companies = details.map((detail) => detail.company);

  const switchActiveHandler = (index) => {
    setPerson(details[index]);
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="loading">Something went wrong!</h2>;
  }

  return (
    <main>
      <section className="section">
        <h2 className="title">Experience</h2>
        <div className="underline" />
      </section>
      <section className="jobs-center">
        <div className="btn-container">
          {companies.map((company, index) => (
            <button
              key={index}
              className={`job-btn ${
                person.company === company && "active-btn"
              }`}
              onClick={() => {
                switchActiveHandler(index);
              }}
            >
              {company}
            </button>
          ))}
        </div>
        <div className="job-info">
          <h3>{person.title}</h3>
          <h4>{person.company}</h4>
          <p className="job-date">{person.dates}</p>
          {person.duties.map((duty, index) => (
            <div key={index} className="job-desc">
              <span className="job-icon">
                <FaAngleDoubleRight />
              </span>
              <p>{duty}</p>
            </div>
          ))}
          <div className="job-icon btn">More Info</div>
        </div>
      </section>
    </main>
  );
}

export default App;
