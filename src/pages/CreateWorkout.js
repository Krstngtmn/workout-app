import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import exercisesJSON from "../api/exercises.json";
import PageTitle from "../components/PageTitle";

import WorkoutCreated from "../components/WorkoutCreated";

const CreateWorkoutView = () => {
  const navigate = useNavigate();
  const [categorySelectionView, setCategorySelectionView] = useState(true);
  const [addNameView, setAddNameView] = useState(false);
  const [selectedExercisesView, setSelectedExercisesView] = useState(false);
  const [addExercisesView, setAddExercisesView] = useState(false);
  const [addWorkoutCreatedView, setWorkoutCreatedView] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const goToNameView = (name, id) => {
    setCategorySelectionView(false);
    setAddNameView(true);

    setSelectedCategory(name);
    setSelectedCategoryId(id);
  };

  const goToAddExercisesView = () => {
    setAddNameView(false);
    setSelectedExercisesView(false);
    setAddExercisesView(true);
  };

  const addToSelectedExercises = (newExercise) => {
    setSelectedExercises([
      ...selectedExercises,
      { name: newExercise, weight: 0, sets: 0, reps: 0 },
    ]);
  };

  const saveWorkout = () => {
    const newWorkout = {
      user_id: parseInt(localStorage.getItem("userId")),
      workout_name: selectedCategory,
      exercises: selectedExercises,
      finished_workouts: [],
    };

    const newWorkoutJSON = JSON.stringify(newWorkout);

    axios
      .post(`https://workout-db-olive.vercel.app/api/addworkout?newWorkout=${newWorkoutJSON}`)
      .then(function (response) {
        console.log(response);
        setSelectedExercisesView(false);
        setWorkoutCreatedView(true);

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selectedExercises.length > 0) {
      setAddExercisesView(false);
      setSelectedExercisesView(true);
    }
  }, [selectedExercises]);

  return (
    <Fragment>
      {categorySelectionView && (
        <div className="grid-x align-center content create-view">
          <div className="cell text-center">
            <PageTitle
              title="Create a new workout"
              subtitle="Pick a category and choose your exercises. You can stick to one
              category or create a custom mix.Choose custom category if you want
              to write your own exercise."
            />
          </div>

          <div className="cell small-12 medium-10 large-8">
            <div className="grid-x grid-margin-x">
              {exercisesJSON.data.map((exerciseCat) => {
                return (
                  <button
                    onClick={() =>
                      goToNameView(
                        exerciseCat.categoryName,
                        exerciseCat.categoryId
                      )
                    }
                    className="cell small-12 medium-6 large-4 button"
                    key={exerciseCat.categoryName}
                  >
                    {exerciseCat.categoryName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {addNameView && (
        <div className="grid-x align-center add-name-view">
          <div className="cell text-center">
            <PageTitle
              title="Enter the name of your workout"
            />
          </div>

          <input
            type="text"
            name="workout-name"
            className="cell small-5 medium-5 large-4 workout-name"
            defaultValue={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />

          <div className="cell text-center">
            <button
              className="button"
              onClick={goToAddExercisesView}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {selectedExercisesView && (
        <div className="grid-x align-center content selected-exercises">
          <div className="cell small-12 medium-10 large-8">
            <div className="grid-x grid-margin-x exercises">

              {selectedExercises.length > 0 &&
                selectedExercises.map((exercise, i) => {
                  return (
                    <div
                      className="cell small-12 medium-6 button button--small"
                      key={exercise.name + i}
                    >
                      {exercise.name}
                    </div>
                  );
                })}

            </div>
          </div>

          <div className="cell text-center add-more">
            <button
              className="button button--outline"
              onClick={goToAddExercisesView}
            >
              Add more exercises
            </button>
          </div>

          <div className="cell text-center save-workout">
            <button className="button" onClick={saveWorkout}>
              Save workout
            </button>
          </div>
        </div>
      )}

      {addExercisesView && (
        <div className="grid-x align-center content select-exercise">
          <div className="cell text-center">
            <PageTitle
              title="Choose an exercise"
            />
          </div>

          <div className="cell small-12 medium-10 large-8">
            <div className="grid-x grid-margin-x">
              {exercisesJSON.data.find((category) => category.categoryId === selectedCategoryId).exercises.map((exerciseCat) => {
                return (
                  <button
                    onClick={() => addToSelectedExercises(exerciseCat)}
                    className="cell small-12 medium-6 large-4 button button--outline"
                    key={exerciseCat}
                  >
                    {exerciseCat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {addWorkoutCreatedView && (
        <WorkoutCreated selectedCategory={selectedCategory} />
      )}
    </Fragment>
  );
};

export default CreateWorkoutView;
