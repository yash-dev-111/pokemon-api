import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage.js";
import Login from "./components/Login/Login.js";
import { useSelector } from "react-redux";
import Home from "./components/Pages/Home.js";
import Dummy from "./components/Pages/Dummy.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
  let { isUserLoggedIn } = useSelector((state) => state.user);
  console.log("isUserLoggedIn: ", isUserLoggedIn);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/login"
            element={!isUserLoggedIn ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            exact
            path="/dashboard"
            element={isUserLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/home"
            element={isUserLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/dummy"
            element={isUserLoggedIn ? <Dummy /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
