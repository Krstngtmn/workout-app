import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import jQuery from "jquery";
import { Accordion } from "foundation-sites/js/entries/foundation";
import WorkoutExercise from "../components/WorkoutExercise";
import WorkoutDone from "../components/WorkoutDone";
import PageTitle from "../components/PageTitle";

const Workout = () => {
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const [workoutInfo, setWorkoutInfo] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [workoutView, setWorkoutView] = useState(true);
  const [doneView, setDoneView] = useState(false);

  useEffect(() => {
    axios.get(`https://workout-db-olive.vercel.app/api/workout?workoutId=${workoutId}`).then((res) => {
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

    const changedWorkout = {
      exercises: exercises,
      finished_workouts: finishedWorkouts,
    }
    const changedWorkoutJSON = JSON.stringify(changedWorkout);

    axios
      .post(`https://workout-db-olive.vercel.app/api/changeworkout?workoutId=${workoutId}&changedWorkout=${changedWorkoutJSON}`)
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

  const deleteWorkout = () => {
    axios
      .post(`https://workout-db-olive.vercel.app/api/deleteworkout?workoutId=${workoutId}`)
      .then(function (response) {
        // console.log(response);
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Fragment>
      {workoutView && workoutInfo && (
        <div className="grid-x content">
          <div className="cell text-center">
          <PageTitle
          title={workoutInfo.workout_name}
        />
          </div>
          <div className="cell table-names">
            <div className="grid-x">
              <div className="cell auto"></div>
              <h5 className="cell small-2 text-center stats-title">Weight</h5>
              <h5 className="cell small-2 text-center stats-title">Sets</h5>
              <h5 className="cell small-2 text-center stats-title">Reps</h5>
            </div>
          </div>

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
              <div className="cell text-center">
                <button onClick={updateWorkout} className="button">
                  Finish Workout
                </button>
              </div>

              <div className="cell text-center">
                <button className="button-delete" onClick={deleteWorkout}>
                  Delete workout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {doneView && <WorkoutDone />}
    </Fragment>
  );
};

export default Workout;
