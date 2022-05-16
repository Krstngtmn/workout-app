import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CreateWorkoutView from "./pages/CreateWorkoutView";
import Workout from "./pages/Workout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
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
          <Route path="welcome" element={<LandingPage />} />
          <Route path="workout/:workoutId" element={<Workout />} />
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
