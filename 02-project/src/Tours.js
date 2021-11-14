import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const { tours, onRemoveTour } = props;

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} onRemoveTour={onRemoveTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
