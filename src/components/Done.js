import Workout from "../pages/Workout";

function Done() {
  return (
    <div className="done-container">
      <div className="message">
        <h1>Done!</h1>
        <h2 className="cell">
          You have created a new workout named {workoutInfo.workout_name} !
        </h2>
      </div>
      <Link to="/" className="btn--primary btn--small">
        Go to my workouts
      </Link>
    </div>
  );
}

export default Done;
