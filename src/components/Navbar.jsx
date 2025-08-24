import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserDetails } from "../services/api";
import ReportWasteModal from "./modals/ReportWasteModal";
import "../styles/Auth.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (localStorage.getItem("token")) {
        try {
          const response = await getUserDetails();
          setUserRole(response.data.user.role || "user");
          console.log("User details:", response.data.user);
        } catch (error) {
          toast.error("Failed to fetch user details", { toastId: "error-user-details" });
          console.error("User details error:", error.response?.data || error.message);
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiresAt");
          setTimeout(() => navigate("/login"), 3000);
        }
      } else{
        navigate("/login")
      }
    };
    fetchUserDetails();
  }, [navigate]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Waste", href: "/waste" },
  ];

  const handleDashboardClick = () => {
    if (localStorage.getItem("token")) {
      if (userRole === "admin") {
        navigate("/admin");
      } else if (userRole === "company") {
        navigate("/company");
      } else {
        navigate("/dashboard");
      }
    } else {
      toast.error("Please log in to access the dashboard", { toastId: "auth-dashboard" });
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  const handleRequestPickupClick = () => {
    if (localStorage.getItem("token")) {
      setShowModal(true);
    } else {
      toast.error("Please log in to request a pickup", { toastId: "auth-pickup" });
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <>
      {showModal && <ReportWasteModal onClose={() => setShowModal(false)} />}
      <nav className="bg-[#137D17] text-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex gap-x-10 flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white">
                Waste .
              </a>
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    end
                    className={({ isActive }) =>
                      `text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "text-white underline" : "text-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <p
                  className="text-gray-300 cursor-pointer hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={handleRequestPickupClick}
                >
                  Request Pickup
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <button
                className="text-xs border-2 border-white px-4 py-1.5 font-medium cursor-pointer hover:bg-white hover:text-[#137D17] transition"
                onClick={handleDashboardClick}
              >
                Dashboard
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex gap-x-3 items-center">
              <div>
                <button
                  className="text-[11px] border-2 border-white px-4 py-1 font-medium cursor-pointer hover:bg-white hover:text-[#137D17] transition"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium hover:text-[#137D17] hover:bg-gray-50 ${
                      isActive ? "text-[#137D17]" : "text-black"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <p
                className="text-black cursor-pointer hover:text-[#137D17] px-3 py-2 text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  handleRequestPickupClick();
                  setIsOpen(false);
                }}
              >
                Request Pickup
              </p>
            </div>
          </div>
        )}
      </nav>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default Navbar;
