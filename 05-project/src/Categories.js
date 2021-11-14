import React from "react";

const Categories = ({ onToggleFilter, categoryList }) => {
  return (
    <div className="btn-container menu">
      <button className="filter-btn" onClick={() => onToggleFilter("all")}>
        all
      </button>
      {categoryList.map((item) => (
        <button
          key={item}
          className="filter-btn"
          onClick={() => onToggleFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
