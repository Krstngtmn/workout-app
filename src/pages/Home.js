import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.scss";
import PageTitle from "../components/PageTitle";

function Home() {
  const [loading, setLoading] = useState(true);
  const [myWorkouts, setMyWorkouts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/workouts`).then((res) => {
      setLoading(false);
      setMyWorkouts(res.data);
    });
  }, []);

  return (
    <div className="grid-x align-center content">
      <div className="cell text-center">
        <PageTitle
          title="My workouts"
          subtitle="Hey Kris! Choose today's workout."
        />
      </div>
      {loading && <div className="cell shrink">Loading</div>}

      {!loading &&
        myWorkouts.length > 0 &&
        myWorkouts.map((workout, i) => {
          return (
            <div className="cell" key={workout._id}>
              <div className="grid-x align-center">
                <Link
                  to={`workout/${workout._id}`}
                  className={`cell small-10 medium-6 large-4 workout-item ${
                    i % 2 === 0 ? "" : "odd"
                  }`}
                >
                  {workout.workout_name}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
