import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.scss";

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
      <h2 className="cell text-center">
        This is the home page if you're logged in and have workouts. See all
        workouts created.
      </h2>

      {loading && <div className="cell shrink">Loading</div>}

      {!loading &&
        myWorkouts.length > 0 &&
        myWorkouts.map((workout) => {
          return (
            <div className="cell" key={workout._id}>
              <Link to={`workout/${workout._id}`}>
                <h4>{workout.workout_name}</h4>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
