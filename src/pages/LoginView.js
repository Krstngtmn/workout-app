import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.scss";

const LoginView = () => {
  const navigate = useNavigate();

  const adminUser = {
    username: "Kris",
    password: "kriskris",
    userId: 666,
  };

  const [user, setUser] = useState({ username: "", password: "", userId: "" });
  const [details, setDetails] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const refreshFields = () => {
    setError("Details do not match, try again");
    setTimeout(() => {
      setError("");
      setDetails({ username: "", password: "" });
    }, 2000);
  };

  const Login = (details) => {
    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        username: details.username,
        password: details.password,
        userId: adminUser.userId,
      });

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userId", adminUser.userId);
      navigate("/", { replace: true });
    } else {
      refreshFields();
    }
  };

  const Logout = () => {
    setUser({ username: "", password: "", userId: "" });
    console.log("Logout");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="login-page">
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
            <button className="btn--primary" type="submit">
              Sign in
            </button>
          </div>
          <button className="btn--secondary" type="submit">
            Don't have an account yet? Register here
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
