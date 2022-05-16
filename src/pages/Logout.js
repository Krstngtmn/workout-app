import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/Logout.scss";

function Logout() {
  return (
    <div className="grid-x align-center logout-page">
      <h2 className="cell text-center">You have been logged out</h2>
      <Link to="/" className="cell shrink btn--primary btn--large">
        Go to homepage
      </Link>
    </div>
  );
}

export default Logout;
