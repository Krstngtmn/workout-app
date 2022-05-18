import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import StayStrong from "../assets/StayStrong.png"


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
          subtitle="Change your settings here"
        />
            <Link to="/" className="button">
            Dark mode
            </Link>
            <Link to="/" className="button">
            Light mode
            </Link>
            <Link to="/" className="button">
            Change email
            </Link>
            <Link to="/" className="button">
            Change password
            </Link>
          <img src={StayStrong} />
          <Link to="/logout" className="button">
            Sign out
          </Link>
        </div>
     </div>
  );
};

export default Account;