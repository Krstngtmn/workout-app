import { Fragment } from "react";


import "../styles/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <Fragment>
        <h1>
          This is the home page if you're not logged in and are not on mobile
        </h1>
        <div className="bg-circle"></div>
      </Fragment>
    </div>
  );
}

export default LandingPage;
