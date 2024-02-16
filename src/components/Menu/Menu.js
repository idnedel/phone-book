import React from "react";
import menuStyles from "./Menu.module.css";

const Menu = () => {
  return (
    <header className={menuStyles.menu}>
      <div>
        <input type="text" placeholder="Search" />
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Menu;
