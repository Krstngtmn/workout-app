import { Fragment, useEffect, useState } from "react";

import "../styles/CreateWorkoutView.scss";

const CreateWorkoutView = () => {
  const [categorySelectionView, setCategorySelectionView] = useState(true);
  const [addNameView, setAddNameView] = useState(false);
  const [selectedExercisesView, setSelectedExercisesView] = useState(false);
  const [addExercisesView, setAddExercisesView] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const exerciseCats = [
    { name: "Upper body" },
    { name: "Legs" },
    { name: "Abs" },
    { name: "Cardio" },
    { name: "Custom" },
  ];

  const exercisesList = [
    { name: "Glute bridges" },
    { name: "10min run" },
    { name: "Leg press" },
    { name: "Lat pulldown" },
    { name: "Military press" },
  ];

  const goToNameView = (e) => {
    setCategorySelectionView(false);
    setAddNameView(true);

    setSelectedCategory(e.target.innerText);
  };

  const goToAddExercisesView = () => {
    setAddNameView(false);
    setSelectedExercisesView(false);
    setAddExercisesView(true);
  };

  const addToSelectedExercises = (newExercise) => {
    setSelectedExercises([...selectedExercises, { name: newExercise }]);
  };

  const saveWorkout = () => {
    console.log("Name: " + selectedCategory);
    console.log(selectedExercises);
    console.log(localStorage.getItem("userInfo"));
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
        <div className="grid-x align-center create-view">
          <h1 className="cell">First step of workout creation</h1>
          <h4 className="cell large-6">
            Pick a category and choose your exercises. You can stick to one
            category or create a custom mix.Choose custom category if you want
            to write your own exercise.{" "}
          </h4>

          <h5 className="cell">
            Needs API to be called into different category divs
          </h5>

          <div className="cell">
            <div className="grid-x grid-margin-x">
              {exerciseCats.map((exerciseCat) => {
                return (
                  <button
                    onClick={goToNameView}
                    className="cell small-12 medium-6 btn--primary btn--small"
                    key={exerciseCat.name}
                  >
                    {exerciseCat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {addNameView && (
        <div className="grid-x">
          <input
            type="text"
            name="workoutName"
            id="workoutName"
            defaultValue={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />

          <div className="cell text-center">
            <button
              className="btn--primary btn--small"
              onClick={goToAddExercisesView}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {selectedExercisesView && (
        <div className="grid-x">
          {selectedExercises.length > 0 &&
            selectedExercises.map((exercise, i) => {
              return <div key={exercise.name + i}>{exercise.name}</div>;
            })}

          <div className="cell text-center">
            <button
              className="btn--primary btn--small"
              onClick={goToAddExercisesView}
            >
              Add more exercises
            </button>
          </div>

          <div className="cell text-center">
            <button className="btn--primary btn--small" onClick={saveWorkout}>
              Save workout
            </button>
          </div>
        </div>
      )}

      {addExercisesView && (
        <div className="grid-x">
          {exercisesList.map((exerciseCat) => {
            return (
              <button
                onClick={() => addToSelectedExercises(exerciseCat.name)}
                className="cell small-12 medium-6 btn--primary btn--small"
                key={exerciseCat.name}
              >
                {exerciseCat.name}
              </button>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default CreateWorkoutView;
