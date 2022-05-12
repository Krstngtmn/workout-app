import React, { useState } from "react";
import "../styles/Loginview.scss";

const Loginview = ({ Login, error }) => {
// function Loginview({ Login, error }) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="login-page">
      <h1>Workout App</h1>
      <div className="bg"></div>

      <div className="login-container">

        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h3>Welcome back!</h3>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <input className="btn" type="submit" value="Login" />
          </div>
          <button className="register-link" type="submit">
            Don't have an account yet? Register here
          </button>
        </form>
      </div>
      </div>
  );
}

export default Loginview;
