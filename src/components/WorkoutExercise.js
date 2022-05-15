import { useEffect, useState } from "react";

const WorkoutExercise = ({ exerciseInfo }) => {
  const [weight, setWeight] = useState(exerciseInfo.weight);
  const [sets, setSets] = useState(exerciseInfo.sets);
  const [reps, setReps] = useState(exerciseInfo.reps);

  console.log(exerciseInfo);

  return (
    <div className="accordion-item" data-accordion-item>
      <a href="#" className="grid-x accordion-title">
        <h1 className="cell auto">{exerciseInfo.name}</h1>
        <div className="cell auto">{weight}</div>
        <div className="cell auto">{sets}</div>
        <div className="cell auto">{reps}</div>
      </a>

      <div className="grid-x accordion-content" data-tab-content>
        <div className="cell">
          <h4>Weight</h4>
          <input
            type="range"
            min="1"
            max="100"
            step="0.5"
            defaultValue={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutExercise;
