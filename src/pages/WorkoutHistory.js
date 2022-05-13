import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import BiceDB from "../assets/BicepDB.png"

import "../styles/index.scss"


function WorkoutHistory() {
  return (
    
    <div className="App">
      <Fragment>
        <Header />
          <div className="content">
        <h1>Workout history</h1>
        <h3>
          See a list of previous workout sessions that have marked as completed. Can go inside the individual session aswell.
        </h3>
        <img src={BiceDB} />
      </div>
      <button className="btn" type="submit">
        Go to my workouts
      </button>
        <Background />
        <Footer />
      </Fragment>
    </div>
  );
}

export default WorkoutHistory;