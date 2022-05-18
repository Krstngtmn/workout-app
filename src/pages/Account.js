import { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";


const Account = () => {
  const adminUser = {
    username: "Kris",
    email: "kris@kris.com",
    password: "kriskris",
    userId: 666,
  };

  return (
    <Fragment>
  <div className="grid-x align-center content">
    <div className="cell text-center">
      <PageTitle
        title={`Welcome, <span>${adminUser.username}</span>`}
        subtitle="This is the Dashboard page. If you're logged in and have completed
        workouts, you will see your past workout sessions."
      />
      <div className="grid-x align-center content">
      <div className="cell text-center">
        <h3>Dark mode/light mode</h3>
        <h3>Change email</h3>
        <h3>Change password</h3>
        <Link to="/logout" className="button">
          Sign out
        </Link>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

export default Account;