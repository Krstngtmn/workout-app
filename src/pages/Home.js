import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.scss";
import userEvent from "@testing-library/user-event";
import UserName from "../components/UserName";

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
    <Fragment>
      <UserName />
      <div className="grid-x align-center content">
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
    </Fragment>
  );
}

export default Home;
