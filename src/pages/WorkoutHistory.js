import { Fragment } from "react";
import { Link } from "react-router-dom";
import DBClock from "../assets/DBClock.png";

import "../styles/index.scss";

function WorkoutHistory() {
  return (
    <div className="App">
      <Fragment>
        <div className="content">
          <h1>Workout history</h1>
          <h3>
            See a list of previous workout sessions that have marked as
            completed. Can go inside the individual session aswell.
          </h3>
          <img src={DBClock} />
        </div>
        <div>
          <Link to="/" className="btn--primary btn--large">
            Go to my workouts
          </Link>
        </div>
      </Fragment>
    </div>
  );
}

export default WorkoutHistory;
