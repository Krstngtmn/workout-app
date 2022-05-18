import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle";
import KBDBBotle from "../assets/KBDBBottle.png"

function Dashboard() {
  return (
    <div className="grid-x align-center content">
      <div className="cell text-center">
        <PageTitle
          title="Dashboard"
          subtitle="This is the Dashboard page. If you're logged in and have completed
          workouts, you will see your past workout sessions."
        />
        <img src={KBDBBotle} />
       </div>
         <div className="cell text-center">
            <Link to="/" className="button">
              Go to my workouts
            </Link>
         </div>
    </div>
  );
}

export default Dashboard;
