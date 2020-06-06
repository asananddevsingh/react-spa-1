import React from "react";
import logoIcon from "../../assets/icons/logo.svg";
import "./header.css";

/**
 * @description - Header component.
 *
 * @param {*} props - Component props
 */
const header = () => {
  return (
    <>
      <header className="Header">
        <img src={logoIcon} className="Logo" alt="logo" />
        <h2>Grocery App - Exzeo</h2>
      </header>
    </>
  );
};

export default header;
