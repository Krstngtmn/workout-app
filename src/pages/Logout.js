import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Logout.scss";

const Logout = () => {
  //     setUser({ username: "", email: "", password: "" });
  //     console.log("Logout");
  return (
    <div className="grid-x align-center logout-page">
      <h2 className="cell text-center">You have been signed out</h2>
      <Link to="/" className="cell shrink btn--primary btn--large">
        Go to homepage
      </Link>
    </div>
  );
};

export default Logout;
