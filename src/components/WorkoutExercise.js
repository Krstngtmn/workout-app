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
      <a href="#" className="grid-x align-middle accordion-title">
        <h1 className="cell auto">{exerciseInfo.name}</h1>
        <div className="cell small-2 text-center stats">
          {exerciseInfo.weight > 0 && exerciseInfo.weight}
          {exerciseInfo.weight > 0 && <span>KG</span>}
          </div>
        <div className="cell small-2 text-center stats">{exerciseInfo.sets > 0 && exerciseInfo.sets}</div>
        <div className="cell small-2 text-center stats">{exerciseInfo.reps > 0 && exerciseInfo.reps}</div>
      </a>

      <div className="grid-x accordion-content" data-tab-content>
        <div className="cell slider-row">
          <h4>Weight
            <span>{exerciseInfo.weight}
              <span>KG</span>
            </span>
          </h4>
          <div className="slider-container">
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
        </div>
        <div className="cell slider-row">
          <h4>Sets
          <span>{exerciseInfo.sets}</span>
          </h4>
          <div className="slider-container">
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
        </div>
        <div className="cell slider-row">
          <h4>Reps
          <span>{exerciseInfo.reps}</span>
          </h4>
          <div className="slider-container">
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
    </div>
  );
};

export default WorkoutExercise;
