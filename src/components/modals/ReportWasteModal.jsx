
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import { createReport } from "../../services/api";

const ReportWasteModal = ({ onClose }) => {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    location: "",
    latitude: "",
    longitude: "",
    type: "",
    description: "",
    quantity: "",
    preferredPickupTime: "",
    images: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isGeoLoading, setIsGeoLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      setFormErrors((prev) => ({ ...prev, images: "Maximum 4 images allowed" }));
      toast.error("Maximum 4 images allowed");
      return;
    }
    setFormData((prev) => ({ ...prev, images: files }));
    setFormErrors((prev) => ({ ...prev, images: "" }));
  };

  // Handle geolocation
  const handleGeolocationClick = async () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    try {
      const permission = await navigator.permissions.query({ name: "geolocation" });
      if (permission.state === "denied") {
        toast.error("Geolocation permission denied. Please enable it in your browser settings.");
        return;
      }

      if (isGeoLoading) return; // Prevent multiple requests
      setIsGeoLoading(true);
      setFormErrors((prev) => ({ ...prev, location: "" }));

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          setFormData((prev) => ({ ...prev, latitude, longitude }));
          fetchAddressFromCoords(latitude, longitude);
          if (accuracy > 50) {
            toast.warn("Geolocation accuracy is low. Address may be approximate.");
          } else {
            toast.success("Location retrieved successfully!");
          }
          setIsGeoLoading(false);
        },
        (err) => {
          toast.error("Unable to retrieve your location: " + err.message);
          setIsGeoLoading(false);
          console.error(err);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } catch (err) {
      toast.error("Error checking geolocation permissions");
      setIsGeoLoading(false);
      console.error(err);
    }
  };

  // Fetch address from coordinates using Nominatim
  const fetchAddressFromCoords = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
        { headers: { "User-Agent": "WasteManagementApp/1.0" } }
      );
      const data = await response.json();
      if (data.display_name) {
        setFormData((prev) => ({ ...prev, location: data.display_name }));
      } else {
        setFormData((prev) => ({ ...prev, location: `${lat}, ${lng}` }));
        toast.warn("Unable to fetch address, using coordinates");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      setFormData((prev) => ({ ...prev, location: `${lat}, ${lng}` }));
      toast.error("Failed to fetch address, using coordinates");
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.type) errors.type = "Type of waste is required";
    if (!formData.location) errors.location = "Pickup address is required";
    if (!formData.latitude || !formData.longitude) errors.location = "Geolocation coordinates are required";
    if (!formData.description) errors.description = "Description is required";
    if (!formData.quantity) errors.quantity = "Quantity or approximate weight is required";
    if (!formData.preferredPickupTime) errors.preferredPickupTime = "Preferred time slot is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("location", formData.location);
    formDataToSend.append("latitude", formData.latitude);
    formDataToSend.append("longitude", formData.longitude);
    formDataToSend.append("type", formData.type);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("preferredPickupTime", formData.preferredPickupTime);
    formData.images.forEach((image) => formDataToSend.append("images", image));

    try {
      await createReport(formDataToSend);
      toast.success("Waste report submitted successfully!");
      console.log("submitted")
      setIsLoading(false);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create report");
      setIsLoading(false);
      console.log(error)
    }
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-[#344054B2] bg-opacity-50 flex items-center justify-center z-70 px-[3%]">
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="h-fit overflow-y-auto bg-white rounded-md w-full sm:w-[612px]"
      >
        <form className="max-h-[95vh] py-3 px-3 xsm:py-6 xsm:px-7 flex flex-col gap-5 w-full rounded-md">
          <div className="flex justify-end w-fit">
            <IoClose
              className="text-lg text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={onClose}
            />
          </div>

          <div className="flex flex-col gap-y-1 items-center text-center">
            <h3 className="text-base font-semibold sm:text-xl text-[#3C366B]">
              Request Waste Pickup
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quisquam?
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="type" className="text-[13px]">
              Type Of Waste
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Select the type of waste
            </p>
            <select
              name="type"
              id="type"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.type ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="">Select One</option>
              <option value="solid">Solid</option>
              <option value="liquid">Liquid</option>
              <option value="hazardous">Hazardous</option>
              <option value="recyclable">Recyclable</option>
            </select>
            {formErrors.type && (
              <p className="text-[11px] text-red-500">{formErrors.type}</p>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="location" className="text-[13px]">
              Pickup Address
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Input the pickup addrerss or{" "}
              <small
                className="text-[11px] sm:text-xs text-blue-500 font-semibold cursor-pointer hover:text-blue-700"
                onClick={handleGeolocationClick}
                disabled={isGeoLoading}
              >
                {isGeoLoading ? "Fetching location..." : "Click here"}
              </small>{" "}
              to use geolocation
            </p>
            <input
              type="text"
              name="location"
              id="location"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.location ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter address or use geolocation"
            />
            {formErrors.location && (
              <p className="text-[11px] text-red-500">{formErrors.location}</p>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="preferredPickupTime" className="text-[13px]">
              Preferred Time Slot
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Input your preferred time slot to pick up the waste
            </p>
            <input
              type="datetime-local"
              name="preferredPickupTime"
              id="preferredPickupTime"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.preferredPickupTime ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              value={formData.preferredPickupTime}
              onChange={handleInputChange}
            />
            {formErrors.preferredPickupTime && (
              <p className="text-[11px] text-red-500">{formErrors.preferredPickupTime}</p>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="quantity" className="text-[13px]">
              Quantity / Approximate Weight
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Input the quantity or approximate weight of the waste and ensure to add the measurement unit
            </p>
            <input
              type="text"
              name="quantity"
              id="quantity"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.quantity ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="E.g., 5kg or 10 liters"
            />
            {formErrors.quantity && (
              <p className="text-[11px] text-red-500">{formErrors.quantity}</p>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="description" className="text-[13px]">
              Description
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Provide additional details about the waste
            </p>
            <textarea
              name="description"
              id="description"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.description ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="E.g., Plastic bottles and bags"
              rows={4}
            />
            {formErrors.description && (
              <p className="text-[11px] text-red-500">{formErrors.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="images" className="text-[13px]">
              Upload Photos
            </label>
            <p className="text-[11px] sm:text-xs text-gray-500 mb-1">
              Upload a maximum of 4 photos
            </p>
            <input
              type="file"
              name="images"
              id="images"
              className={`py-2.5 px-3 border rounded-md text-[13px] ${
                formErrors.images ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#79DA11]`}
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
            {formErrors.images && (
              <p className="text-[11px] text-red-500">{formErrors.images}</p>
            )}
            {formData.images.length > 0 && (
              <p className="text-[11px] text-gray-500">
                {formData.images.length} file(s) selected
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-3 bg-gray-50 pb-10 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs sm:text-sm focus:ring-gray-500 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-4 py-2 bg-[#79DA11] text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 cursor-pointer text-xs sm:text-sm disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Report"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default ReportWasteModal;
