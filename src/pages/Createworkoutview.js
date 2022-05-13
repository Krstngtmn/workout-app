import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/CreateWorkoutView.scss";

function CreateWorkoutView() {
  return (
    <div className="create-view">
      <Fragment>
        <Header />

        <h1>
          First step  of workout creation
        </h1>
        <div className="bg-circle"></div>
        <Footer />
      </Fragment>
    </div>
  );
}



export default CreateWorkoutView

