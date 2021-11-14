import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, onRemoveTour }) => {
  const [myInfo, setMyInfo] = useState(false);

  const readMoreHandler = (event) => {
    event.preventDefault();
    setMyInfo((prevState) => !prevState);
  };

  const removeTourHandler = (event) => {
    event.preventDefault();
    onRemoveTour(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {myInfo ? info : info.slice(0, 200).concat("...")}
          <button onClick={readMoreHandler}>
            {myInfo ? "Show Less" : "Show More"}
          </button>
        </p>
        <button className="delete-btn" onClick={removeTourHandler}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
