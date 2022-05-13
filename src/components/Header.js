import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BiceDB from "../assets/BicepDB.png";
import Button from '../components/Button';
import "../styles/Header.scss";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className="header">
      <div
        className="nav-wrapper">
          <Link to="/" className="navbar-logo"><img className="logo" src={BiceDB} /></Link>
          <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              My workouts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/build" className="nav-links" onClick={closeMobileMenu}>
              Create workout
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-links" onClick={closeMobileMenu}>
              Account
            </Link>
          </li>
          <li>
            <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
              Sign out
            </Link>
          </li>
        </ul>
        <div className="menu-close-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "hidden"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
