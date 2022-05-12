import React from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

function WorkoutConstructor() {
  return (
    <div className="constructor-view">
      <Fragment>
        <Header />
        <div>
          <h1>Create a new workout</h1>
        </div>
        <ul>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
          <li className="exercise-option">Exercise options from API go here</li>
        </ul>
        <Background />
        <Footer />
      </Fragment>
    </div>
  );
}

export default WorkoutConstructor;
