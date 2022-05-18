import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import DBClock from "../assets/DBClock.png";

import "../styles/index.scss";

function WorkoutHistory() {
  return (
    <div className="grid-x align-center content account-view">
      <div className="cell small-12 medium-8 large-6 text-center">
        <PageTitle
          title={`Workout history`}
          subtitle="See a list of previous workout sessions that have marked as
          completed. Can go inside the individual session aswell."
        />
        <img src={DBClock} />
      </div>

      <div className="cell text-center">
        <Link to="/" className="button">
          Go to my workouts
        </Link>
      </div>
    </div>
  );
}

export default WorkoutHistory;
