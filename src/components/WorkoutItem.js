import React, { useState } from "react";
import { useContext } from "react";
import ExerciseContext from "./ExerciseContext";
import "../styles/WorkoutItem.scss";

function WorkoutItem({ name }) {
  const { addToList } = useContext(ExerciseContext);

  return (
    <div onClick={() => addToList(name)} className="workout-item">
      <div className="item-name">
        <h3>{name}</h3>
      </div>
      <div className="item-stats">
        <h4></h4>
      </div>
    </div>
  );
}

export default WorkoutItem;
