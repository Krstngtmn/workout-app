import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <Fragment>
        <Header />

        <h1>
          This is the home page if you're not logged in and are not on mobile
        </h1>
        <div className="bg-circle"></div>
        <Footer />
      </Fragment>
    </div>
  );
}

export default LandingPage;
