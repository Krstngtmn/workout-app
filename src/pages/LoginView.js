import { useState, Fragment } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Background from '../components/Background';

import "../styles/Login.scss";

const LoginView = ({ Login, error }) => {
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
      <Fragment>
      <Header />
      <h1>Workout App</h1>
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
            <button className="btn--primary" type="submit">Sign in</button>
          </div>
          <button className="btn--secondary" type="submit">
            Don't have an account yet? Register here
          </button>
        </form>
      </div>
      <Footer />
      </Fragment>
      </div>
  );
}

export default LoginView;