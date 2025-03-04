import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Checkbox from "@/components/checkbox/Checkbox2";
import axiosInstance from "@/api/axiosInstance";
import Loader from "@/components/loader/Loader";
import { useAlert } from "@/hooks/use-alert";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const { AlertBox, showAlert } = useAlert();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    // const { data } = await axiosInstance.post('auth/login', {
    //     username: formData.get('username'),
    //     password: formData.get('password')
    // })

    // if (data.success) {
    //     setToken(data.token)
    //     e.target.reset()
    //     navigate('/users/dashboard', { replace: true })
    // } else {
    //     showAlert(data.message, 'error')
    // }
    setToken("dummyToken"); // Dummy token Set
    e.target.reset();
    navigate("/users/dashboard", { replace: true });
    setLoading(false);
  };

  return (
    <>
      <AlertBox />
      <Loader loading={loading} />
      <h1>Login</h1>
      <form className="form-input" onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-label">
          Username
          <span
            className="info-icon"
            aria-label="For STUDENT and ALUMNI, the username is your admission number. For ADMIN, it is your employee ID."
            role="tooltip"
          >
            ℹ️
            <span className="tooltip">
              For STUDENT and ALUMNI, your username is your admission number.
              <br />
              For ADMIN, it is your employee ID.
            </span>
          </span>
        </label>
        <input type="text" name="username" required />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
        />

        <Checkbox
          name="Show Password"
          cur={showPassword}
          toggle={() => setShowPassword((prev) => !prev)}
        />
        <input type="submit" value="Submit" />
      </form>

      <div className="auth-links">
        <p>Don&apos;t have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default Login;
