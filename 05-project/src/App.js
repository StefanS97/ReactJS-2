import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [food, setFood] = useState(items);

  const categoryList = [...new Set(items.map((item) => item.category))];

  const toggleFilter = (filter) => {
    if (filter !== "all") {
      const newFilter = items.filter((item) => item.category === filter);
      setFood(newFilter);
    } else {
      setFood(items);
    }
  };

  return (
    <main>
      <section className="menu">
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
        <Categories onToggleFilter={toggleFilter} categoryList={categoryList} />
        <section className="section-center">
          {food.map((item) => (
            <Menu key={item.id} {...item} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
