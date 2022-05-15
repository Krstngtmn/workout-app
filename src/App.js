import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CreateWorkoutView from "./pages/CreateWorkoutView";
import WorkoutCreated from "./pages/WorkoutCreated";
import WorkoutDone from "./pages/WorkoutDone";
import WorkoutList from "./pages/WorkoutList";
import NewUser from "./pages/NewUser";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ExerciseSelector from "./pages/ExerciseSelector";
import Logout from "./pages/Logout";
import WorkoutHistory from "./pages/WorkoutHistory";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="account" element={<Account />} />
          <Route path="createnew" element={<CreateWorkoutView />} />
          <Route path="newcreated" element={<WorkoutCreated />} />
          <Route path="welcome" element={<LandingPage />} />
          <Route path="completed" element={<WorkoutDone />} />
          <Route path="newuser" element={<NewUser />} />
          <Route path="myworkout" element={<WorkoutList />} />
          <Route path="buildselect" element={<ExerciseSelector />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="history" element={<WorkoutHistory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
