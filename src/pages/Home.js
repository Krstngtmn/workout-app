import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [myWorkouts, setMyWorkouts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/workouts`).then((res) => {
      console.log(res.data);

      setLoading(false);
      setMyWorkouts(res.data);
    });
  }, []);

  return (
    <div className="content">
      <h1>
        This is the home page if you're logged in and have workouts. See all
        workouts created.
      </h1>

      {loading && <div>Loading</div>}

      {!loading &&
        myWorkouts.length > 0 &&
        myWorkouts.map((workout) => {
          return <div key={workout._id}>{workout.workout_name}</div>;
        })}
    </div>
  );
}

export default Home;
