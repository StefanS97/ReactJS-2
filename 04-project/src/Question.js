import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, toggle, onToggle }) => {
  const onExpandHandler = () => {
    onToggle(id);
  };

  return (
    <div>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={onExpandHandler}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </div>
  );
};

export default Question;
