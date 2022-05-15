import { useState, useContext } from "react";
import WorkoutItem from "../components/WorkoutItem";
import ExerciseContext from "../components/ExerciseContext";

const ExerciseSelector = () => {
  const exercises = [
    { name: "Goblet Squat", bodypart: "legs" },
    { name: "Leg Press", bodypart: "legs" },
    { name: "Reverse Lunges", bodypart: "legs" },
    { name: "Front Squat", bodypart: "legs" },
    { name: "Leg Curl", bodypart: "legs" },
    { name: "Abductor", bodypart: "legs" },
  ];

  const { item } = useContext(ExerciseContext);
  console.log(item);

  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <WorkoutItem name={exercise.name} />
      ))}
    </div>
  );
};

export default ExerciseSelector;
