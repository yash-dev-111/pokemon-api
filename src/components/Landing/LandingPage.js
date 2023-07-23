import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";


const LandingPage = () => {
  const { isUserLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="landing-page-container">
     <h1>Seattle New Media Coding Assignment</h1>
      {isUserLoggedIn ? (
        <Link to="/dashboard" className="dashboard-link">
          Go to Dashboard
        </Link>
      ) : (
        <Link to="/login" className="login-link">
          Go to Login Page
        </Link>
      )}
    </div>
  );
};

export default LandingPage;
