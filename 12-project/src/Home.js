import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const appCtx = useContext(AppContext);

  const modalHandler = () => {
    appCtx.openModal();
  };

  const sidebarOpenHandler = () => {
    appCtx.openSidebar();
  };

  return (
    <main>
      <button className="sidebar-toggle" onClick={sidebarOpenHandler}>
        <FaBars />
      </button>
      <button className="btn" onClick={modalHandler}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
