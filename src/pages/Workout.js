import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import jQuery from "jquery";
import { Accordion } from "foundation-sites/js/entries/foundation";
import WorkoutExercise from "../components/WorkoutExercise";
import WorkoutDone from "../components/WorkoutDone";

import "../styles/WorkoutItem.scss";

const Workout = () => {
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const [workoutInfo, setWorkoutInfo] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [workoutView, setWorkoutView] = useState(true);
  const [doneView, setDoneView] = useState(false);

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

  const updateWorkout = () => {
    const date = new Date().toISOString();
    const finishedWorkouts = [
      ...workoutInfo.finished_workouts,
      { exercises, date },
    ];

    axios
      .post(`http://localhost:5001/workout/update/${workoutId}`, {
        exercises: exercises,
        finished_workouts: finishedWorkouts,
      })
      .then(function (response) {
        // console.log(response);
        setWorkoutView(false);
        setDoneView(true);

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      {workoutView && workoutInfo && (
        <div className="grid-x">
          <h1 className="cell">{workoutInfo.workout_name}</h1>

          <div
            className="cell accordion"
            data-accordion
            data-allow-all-closed="true"
          >
            {exercises.map((exercise, index) => (
              <WorkoutExercise
                key={exercise.name + index}
                exerciseInfo={exercise}
                exercisePosition={index}
                exercises={exercises}
                setExercises={setExercises}
              />
            ))}
          </div>

          <div className="cell">
            <div className="grid-x align-center">
              <button
                onClick={updateWorkout}
                className="cell btn--primary btn--large"
              >
                Finish Workout
              </button>
            </div>
          </div>
        </div>
      )}

      {doneView && <WorkoutDone />}
    </Fragment>
  );
};

export default Workout;
