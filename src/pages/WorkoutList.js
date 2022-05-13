import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import "../styles/WorkoutList.scss";

function WorkoutList() {
  return (
    <Fragment>
      <Header />
      <h1>This is the home page if you're logged in and have workouts. See all workouts created.</h1>
      <div className='exercise-list'>
        <ul className="ex-list">
          <li className="ex-item">Api list items appear here</li>
          <li className="ex-item">Api list items appear here</li>
          <li className="ex-item">Api list items appear here</li>
          <li className="ex-item">Api list items appear here</li>
        </ul>
      </div>
      <input className="btn" type="submit" value="Finish workout" />
      <Footer />
    </Fragment>
  )
}

export default WorkoutList

