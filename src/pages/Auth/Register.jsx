
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import {api, createUser} from "../../services/api";
import "../../styles/auth.css"; // Adjust the path as necessary

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
    if (!user.name || user.name.length < 2) {
      errors.name = "Name is required and must be at least 2 characters";
    }
    if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      errors.email = "Valid email is required";
    }
    if (!user.phone || !/^\+\d{10,15}$/.test(user.phone)) {
      errors.phone = "Phone number must start with country code (e.g., +1234567890)";
    }
    if (!user.password || user.password.length < 6 || !/[!@#$%^&*]/.test(user.password)) {
      errors.password = "Password must be 6+ characters with a special character";
    }
    if (user.confirmPassword !== user.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!user.role || !["USER", "COMPANY"].includes(user.role)) {
      errors.role = "Account type is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    setLoading(true);

    // api.post('/users/register', {
    //   name: user.name,
    //   email: user.email,
    //   phone: user.phone,
    //   password: user.password,
    //   role: user.role === "USER" ? "user" : "company",
    // })
    //   .then(response => {
    //       console.log("User created successfully:", response.data);
    //       setTimeout(() => {
    //         navigate("/login");
    //       }, 1500);
    //       localStorage.setItem("token", response.data.token);
    //   }).catch(error => {
    //     console.log(error)
    //     setLoading(false)
    //     toast.error(error.response?.data?.message || "Failed to create user");   
    //   });

    try {
      const response = await createUser({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        role: user.role === "USER" ? "user" : "company",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="authWrapper">
        <div className="leftAuth">
          <div className="authHeading">
            <h2>Create an Account</h2>
            <p className="text-gray-600">
              Create an account to enjoy our features and streamline your event
              planning or <NavLink className="text-[#0B544C]" to="/login">Login</NavLink> if you already have an
              account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Enter your full name as a user or business name as a vendor{" "}
              </p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type here..."
                value={user.name}
                onChange={handleChange}
                className={formErrors.name ? "border-red-500" : ""}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs">{formErrors.name}</p>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">Enter your valid email address </p>
              <input
                type="email"
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
              <label htmlFor="phone">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Enter your valid phone number starting with your country code{" "}
              </p>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Type here..."
                value={user.phone}
                onChange={handleChange}
                className={formErrors.phone ? "border-red-500" : ""}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs">{formErrors.phone}</p>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Password should be more than 6 digits and contain special
                characters{" "}
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
            <div className="inputWrapper">
              <label htmlFor="confirmPassword">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Password should be more than 6 digits and contain special
                characters{" "}
              </p>
              <div className="inputHolder border-[1px] border-[#D1D5DB] rounded-[5px]">
                <input
                  type={showCpassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Type here..."
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className={formErrors.confirmPassword ? "border-red-500" : ""}
                />
                <span
                  className="text-gray-500 border-0"
                  onClick={() => setShowCpassword(!showCpassword)}
                >
                  {showCpassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-xs">{formErrors.confirmPassword}</p>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="type">
                Account Type <span className="text-red-600">*</span>
              </label>
              <p className="text-gray-600">
                Are you a vendor (have equipments, services, e.t.c to rent out)
                or an organizer (here to view and book rentals and services)
              </p>
              <select
                name="role"
                id="role"
                value={user.role}
                onChange={handleChange}
                className={formErrors.role ? "border-red-500" : ""}
              >
                <option value="" disabled>
                  Click to select
                </option>
                <option value="USER">User</option>
                <option value="COMPANY">Company</option>
              </select>
              {formErrors.role && (
                <p className="text-red-500 text-xs">{formErrors.role}</p>
              )}
            </div>
            <button
              className="bg-[#128D7F] hover:bg-[#0B544C] text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "LOADING..." : "SUBMIT"}
            </button>
          </form>
        </div>

        
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default Register;