import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import Loginview from "./components/Loginview";
// import Myworkouts from "./components/Myworkouts";
// import Account from "./components/Account";
// import { Route, BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route path="/" element={<Myworkouts />} />
//         <Route path="about" element={<Account />} />
//         <Route path="login" element={<Loginview />} />
//       </Router>
//     </div>
//   );
// }

function App() {
  const adminUser = {
    username: "Kris",
    email: "kris@kris.com",
    password: "kriskris",
  };
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    function refreshFields() {
      setTimeout(() => setError("Details do not match, try again"), 5000);
      window.location.reload(false);
      setError("Details do not match, try again");
    }

    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      refreshFields();
    }
  };

  const Logout = () => {
    setUser({ username: "", email: "", password: "" });
    console.log("Logout");
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.username}</span>
          </h2>
          <button className="btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <Loginview Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
