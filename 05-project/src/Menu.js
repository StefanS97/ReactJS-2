import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <section className="menu-item">
      <img className="photo" src={img} alt={title}></img>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">{price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </section>
  );
};

export default Menu;
