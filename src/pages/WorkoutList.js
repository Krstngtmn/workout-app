import { useContext, Fragment } from "react";
import WorkoutItem from "../components/WorkoutItem";
import ExerciseContext from "../components/ExerciseContext";

import "../styles/WorkoutItem.scss";

const WorkoutList = () => {
  const { items } = useContext(ExerciseContext);
  console.log(items);

  return (
    <Fragment>
      <h1>Workout</h1>
      <div className="workout-list">
        {items.map((exercise) => (
          <div>
            <h2>{items.name}</h2>
          </div>
        ))}
      </div>
      <input className="btn" type="submit" value="Finish workout" />
    </Fragment>
  );
};

export default WorkoutList;
