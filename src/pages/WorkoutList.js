import { Fragment } from 'react';

import "../styles/WorkoutList.scss";

function WorkoutList() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default WorkoutList

