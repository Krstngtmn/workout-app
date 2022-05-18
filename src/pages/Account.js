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
    <div className="grid-x align-center content account-view">
      <div className="cell small-12 medium-8 large-6 text-center">
        <PageTitle
          title={`Welcome, ${adminUser.username}`}
          subtitle="This is the Dashboard page. If you're logged in and have completed
          workouts, you will see your past workout sessions."
        />
        <div className="cell text-center">
          <h3>Dark mode/light mode</h3>
          <h3>Change email</h3>
          <h3>Change password</h3>
        </div>
        <div className="cell text-center">
          <Link to="/logout" className="button">
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;