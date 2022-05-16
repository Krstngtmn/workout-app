import { Fragment } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const adminUser = {
    username: "Kris",
    email: "kris@kris.com",
    password: "kriskris",
    userId: 666,
  };

  return (
    <Fragment>
      <div>
        <div className="grid-x align-center">
          <h2>
            Welcome, <span>{adminUser.username}</span>
          </h2>
        </div>
        <h3>Dark mode/light mode</h3>
        <h3>Change email</h3>
        <h3>Change password</h3>
        <Link to="/logout" className="btn--primary btn--small">
          Sign out
        </Link>
      </div>
    </Fragment>
  );
};

export default Account;
