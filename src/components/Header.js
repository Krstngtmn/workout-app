import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/Menu.scss";

function Header() {
  return (
    <div className="menu-list">
      <ul className="vertical-menu">
        <li>
          <Link to="/">My workouts</Link>
        </li>
        <li>
          <a href="#">Create workout</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <a href="#">Log out</a>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
