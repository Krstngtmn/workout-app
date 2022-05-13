import { Fragment } from "react";

function WorkoutConstructor() {
  return (
    <div className="constructor-view">
      <Fragment>
        <div>
          <h1>Create a new workout</h1>
          <img src="../src/assets/workout.png" alt="" />
        </div>
        <ul>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
        </ul>
      </Fragment>
    </div>
  );
}

export default WorkoutConstructor;
