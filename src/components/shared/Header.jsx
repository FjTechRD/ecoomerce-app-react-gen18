import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">e-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="/login">
              login
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/purchases">
              purchases
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/cart">
              cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
