import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPersonHandler = (event) => {
    event.preventDefault();
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextPersonHandler = (event) => {
    event.preventDefault();
    if (index < people.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const randomPersonHandler = (event) => {
    event.preventDefault();
    let newIndex = index;
    while (index === newIndex) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPersonHandler}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
