import React from "react";

function WorkoutCreated() {
  return (
    <div className="done-container">
      <div className="message">
        <h1>Done!</h1>
        <h3>
          You have created a new {"Leg day/Upper Body/HIIT/Cardio/Custom"}
          workout!
        </h3>
      </div>
      <button className="btn" type="submit">
        Go to my workouts
      </button>
    </div>
  );
}

export default WorkoutCreated;
