const WorkoutCreated = ({ workoutName }) => {
  return (
    <div className="done-container">
      <div className="message">
        <h1>Done!</h1>
        <h2 className="cell">
          You have created a new workout named {workoutName} !
        </h2>
      </div>
    </div>
  );
};

export default WorkoutCreated;
