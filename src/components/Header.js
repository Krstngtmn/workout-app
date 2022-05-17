import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BicepDBImage from "../assets/BicepDB.png";
import "../styles/Header.scss";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle("overlay-open");
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.addEventListener("resize", closeMobileMenu);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);

  const menuItems = [
    { name: "My workouts", link: "/" },
    { name: "Create a workout", link: "/createnew" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Account", link: "/account" },
    { name: "Workout history", link: "/history" },
  ];

  return (
    <Fragment>
      <header className="grid-x align-middle align-justify header">
        <div className="cell shrink logo">
          <Link to="/">
            <img src={BicepDBImage} />
          </Link>
        </div>

        <nav className="cell auto show-for-large">
          <ul className="grid-x align-right">
            {menuItems.map((menuItem) => {
              return (
                <li className="cell shrink" key={menuItem.name}>
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          className="cell shrink show-for-large button button--x-small button--outline"
          to="/logout"
        >
          Sign out
        </Link>

        <button
          className={`cell shrink hide-for-large hamburger hamburger--spin ${
            click ? "is-active" : ""
          }`}
          onClick={handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>

      <div
        className={`grid-x align-center align-middle hide-for-large mobile-menu ${
          click ? "active" : ""
        }`}
      >
        <nav className="cell auto">
          <ul className="grid-x align-center">
            {menuItems.map((menuItem) => {
              return (
                <li className="cell text-center" key={menuItem.name}>
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                </li>
              );
            })}

            <Link className="cell shrink button button--small" to="/logout">
              Sign out
            </Link>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
