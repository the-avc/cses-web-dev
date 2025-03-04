import { Navigate, Outlet, useNavigate } from "react-router-dom";
import DarkModeButton from "@/components/dark-mode-button/DarkModeButton";
import "./Login.scss";
import useAuth from "@/hooks/useAuth";

const AuthLayout = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const { token } = useAuth();

  return (
    <div className="login">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="dark-btn">
          <img
            className="invert-logo"
            src="/back-image.png"
            alt="Back"
            onClick={handleBackClick}
          />
          <DarkModeButton />
        </div>
        <div className="description">Welcome to the CSES Portal</div>
        {/* {token ? <Navigate to="/users/dashboard" /> : <Outlet />} */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
