import React from "react";
import headerStyles from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <header className={headerStyles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
