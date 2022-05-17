import PageTitle from "../components/PageTitle";

function Dashboard() {
  return (
    <div className="grid-x align-center content">
<div className="cell text-center">
  <PageTitle
    title="Dashboard"
    subtitle="This is the Dashboard page. If you're logged in and have completed
    workouts, you will see your past workout sessions."
  />
</div>
</div>
  );
}

export default Dashboard;
