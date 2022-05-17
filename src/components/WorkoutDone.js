import PageTitle from "./PageTitle";

const WorkoutDone = () => {
  return (
    <div className="grid-x align-center content create-view">
    <div className="cell text-center">
    <PageTitle
            title="Done!"
            subtitle="You have completed your workout session!"
          />
    </div>
  </div>
  );
};
export default WorkoutDone;
