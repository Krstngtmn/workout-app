import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CreateWorkoutview from "./pages/Createworkoutview";
import WorkoutCreated from "./pages/WorkoutCreated";
import WorkoutDone from "./pages/WorkoutDone";
import WorkoutList from "./pages/WorkoutList";
import NewUser from "./pages/NewUser";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import WorkoutConstructor from "./pages/WorkoutConstructor";
import ExerciseSelector from "./pages/ExerciseSelector";
import Logout from "./pages/Logout";

import "./styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="account" element={<Account />} />
        <Route path="createnew" element={<CreateWorkoutview />} />
        <Route path="newcreated" element={<WorkoutCreated />} />
        <Route path="welcome" element={<LandingPage />} />
        <Route path="completed" element={<WorkoutDone />} />
        <Route path="newuser" element={<NewUser />} />
        <Route path="myworkout" element={<WorkoutList />} />
        <Route path="build" element={<WorkoutConstructor />} />
        <Route path="buildselect" element={<ExerciseSelector />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<Account />} />
//         <Route path="login" element={<LoginView />} />
//       </Router>
//     </div>
//   );
// }

// function App() {
//   const adminUser = {
//     username: "Kris",
//     email: "kris@kris.com",
//     password: "kriskris",
//   };
//   const [user, setUser] = useState({ username: "", email: "" });
//   const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log(details);

//     function refreshFields() {
//       setTimeout(() => setError("Details do not match, try again"), 5000);
//       window.location.reload(false);
//       setError("Details do not match, try again");
//     }

//     if (
//       details.username == adminUser.username &&
//       details.password == adminUser.password
//     ) {
//       console.log("Logged in");
//       setUser({
//         username: details.username,
//         password: details.password,
//       });
//     } else {
//       refreshFields();
//     }
//   };

//   const Logout = () => {
//     setUser({ username: "", email: "", password: "" });
//     console.log("Logout");
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Menu />
//       </header>
//       {user.email != "" ? (
//         <div className="welcome">
//           <h2>
//             Welcome, <span>{user.username}</span>
//           </h2>
//           <button className="btn" onClick={Logout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <Loginview Login={Login} error={error} />
//       )}
//     </div>
//   );
// }

export default App;
