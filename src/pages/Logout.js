import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/Logout.scss";

function Logout() {
  return (
    <div className="logout-page">
      <div className="logout-container">
        <h1>You have been logged out</h1>
        <button className="btn--primary btn--large">Go to homepage</button>
      </div>
    </div>
  );
}

export default Logout;
