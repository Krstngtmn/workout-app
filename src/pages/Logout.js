import React from "react";
import "../styles/Logout.scss";

function Logout() {
  return (
    <div className="logout-page">
      <div className="bg"></div>
      <div className="login-container">
        <h1>You have been logged out</h1>
      </div>
      <input className="btn" type="submit" value="Return to home page" />
    </div>
  );
}

export default Logout;
