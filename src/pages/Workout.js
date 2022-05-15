import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jQuery from "jquery";
import { Accordion } from "foundation-sites/js/entries/foundation";
import WorkoutExercise from "../components/WorkoutExercise";

import "../styles/WorkoutItem.scss";

const Workout = () => {
  const { workoutId } = useParams();
  const [workoutInfo, setWorkoutInfo] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/workout/${workoutId}`).then((res) => {
      setWorkoutInfo(res.data);
    });
  }, []);

  useEffect(() => {
    if (workoutInfo) {
      setExercises(workoutInfo.exercises);
      jQuery(document).ready((jQuery) => jQuery(document).foundation());
    }
  }, [workoutInfo]);

  return (
    <Fragment>
      {workoutInfo && (
        <div className="grid-x">
          <h1 className="cell">{workoutInfo.workout_name}</h1>

          <div
            className="cell accordion"
            data-accordion
            data-allow-all-closed="true"
          >
            {exercises.map((exercise) => (
              <WorkoutExercise key={exercise.name} exerciseInfo={exercise} />
            ))}
          </div>

          <div className="cell">
            <div className="grid-x align-center">
              <button className="cell btn--primary btn--large">
                Finish Workout
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Workout;
