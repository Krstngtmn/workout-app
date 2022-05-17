import PageTitle from "./PageTitle";

const WorkoutCreated = ({ workoutName }) => {
  return (
    <div className="grid-x align-center content create-view">
      <div className="cell text-center">
      <PageTitle
              title="Done!"
              subtitle="You have created a new workout named {workoutName} !"
            />
      </div>
    </div>
  );
};

export default WorkoutCreated;
