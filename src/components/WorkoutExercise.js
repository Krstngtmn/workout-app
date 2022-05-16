import { useEffect, useState } from "react";

const WorkoutExercise = ({
  exerciseInfo,
  exercises,
  setExercises,
  exercisePosition,
}) => {
  const handleWeightChange = (e) => {
    const newExercises = [...exercises];
    newExercises[exercisePosition].weight = parseInt(e.target.value);
    setExercises(newExercises);
  };

  const handleSetsChange = (e) => {
    const newExercises = [...exercises];
    newExercises[exercisePosition].sets = parseInt(e.target.value);
    setExercises(newExercises);
  };

  const handleRepsChange = (e) => {
    const newExercises = [...exercises];
    newExercises[exercisePosition].reps = parseInt(e.target.value);
    setExercises(newExercises);
  };

  return (
    <div className="accordion-item" data-accordion-item>
      <a href="#" className="grid-x accordion-title">
        <h1 className="cell auto">{exerciseInfo.name}</h1>

        {exerciseInfo.weight > 0 && (
          <div className="cell auto">{exerciseInfo.weight}</div>
        )}
        {exerciseInfo.sets > 0 && (
          <div className="cell auto">{exerciseInfo.sets}</div>
        )}
        {exerciseInfo.reps > 0 && (
          <div className="cell auto">{exerciseInfo.reps}</div>
        )}
      </a>

      <div className="grid-x accordion-content" data-tab-content>
        <div className="cell">
          <h4>Weight</h4>
          <input
            type="range"
            min="0"
            max="300"
            step="0.5"
            defaultValue={exerciseInfo.weight}
            onChange={handleWeightChange}
            className="slider"
          />
        </div>
        <div className="cell">
          <h4>Sets</h4>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            defaultValue={exerciseInfo.sets}
            onChange={handleSetsChange}
            className="slider"
          />
        </div>
        <div className="cell">
          <h4>Reps</h4>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue={exerciseInfo.reps}
            onChange={handleRepsChange}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutExercise;
