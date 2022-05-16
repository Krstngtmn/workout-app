import { Fragment, useState } from "react";

const Account = () => {
  const adminUser = {
    username: "Kris",
    email: "kris@kris.com",
    password: "kriskris",
  };
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  if (
    details.username == adminUser.username &&
    details.password == adminUser.password
  ) {
    setUser({
      username: details.username,
      password: details.password,
    });
  } else {
    refreshFields();
  }

  return (
    <Fragment>
      <div>
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
        <h3>Dark mode/light mode</h3>
        <h3>Change email</h3>
        <h3>Change password</h3>
      </div>
    </Fragment>
  );
};

export default Account;
