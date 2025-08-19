import "../../styles/Auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!user.email) {
      errors.email = "Email or phone number is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) &&
      !/^\+\d{10,15}$/.test(user.email)
    ) {
      errors.email = "Enter a valid email or phone number (e.g., +1234567890)";
    }
    if (!user.password || user.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const verifyEmail = () => {
    toast.info("Email verification not implemented yet.");
  };

  const forgotPassword = () => {
    toast.info("Forgot password functionality not implemented yet.");
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error, { toastId: `error-${error}` }));
      return;
    }

    setLoading(true);
    const payload = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(user.email)
      ? { email: user.email, password: user.password }
      : { phone: user.email, password: user.password };
    console.log("Login payload:", payload);

    try {
      const response = await loginUser(payload);
      const token = response.data.token;
      const expiresAt = Date.now() + 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiresAt", expiresAt.toString());
      toast.success("Login successful!", { toastId: "success-login" });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      const message = error.response?.data?.msg || "Failed to login. Please check your credentials.";
      toast.error(message, { toastId: `error-${message}` });
      console.error("Login error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="authWrapper">
        <div className="leftAuth">
          <div className="authHeading">
            <h2>Welcome Back</h2>
            <p className="text-gray-600">
              Login to enjoy our features and streamline your event planning or{" "}
              <NavLink to="/register" className="text-[#0B544C]">
                Create account
              </NavLink>{" "}
              if you don't have an account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <label htmlFor="email">
                Email Address or Phone Number <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Enter the email address or phone number used during your registration with us.
              </p>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Type here..."
                value={user.email}
                onChange={handleChange}
                className={formErrors.email ? "border-red-500" : ""}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs">{formErrors.email}</p>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Password should be more than 6 digits and contain special characters
              </p>
              <div className="inputHolder border-[1px] border-[#D1D5DB] rounded-[5px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Type here..."
                  value={user.password}
                  onChange={handleChange}
                  className={formErrors.password ? "border-red-500" : ""}
                />
                <span
                  className="text-gray-500 border-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-xs">{formErrors.password}</p>
              )}
            </div>
            <button
              className="bg-[#128D7F] hover:bg-[#0B544C] text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "LOADING..." : "SUBMIT"}
            </button>
            <div className="text-xs font-medium xsm:text-[13px] flex justify-between w-full">
              <NavLink onClick={verifyEmail} className="hover:text-[#128D7F]">
                Verify Email
              </NavLink>
              <NavLink onClick={forgotPassword} className="hover:text-[#128D7F]">
                Forgot Password
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default Login;
