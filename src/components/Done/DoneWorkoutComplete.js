import React from "react";

function DoneWorkoutComplete() {
  return (
    <div className="done-container">
      <div className="message">
        <h1>Done!</h1>
        <h3>
          You have completed your {""}
          workout session!
        </h3>
      </div>
      <button className="btn" type="submit">
        Go to my workouts
      </button>
    </div>
  );
}

export default DoneWorkoutComplete;