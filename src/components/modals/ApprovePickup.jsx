import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import { approveReport } from "../../services/api"; // Adjust path as needed

const ApprovePickup = ({ onClose, reportId, onApproveSuccess }) => {
  const modalRef = useRef();
  const [time, setTime] = useState(); // Default to current date-time
  const [isLoading, setIsLoading] = useState(false);

  // Handle time change
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // Handle approve action
  const handleApprove = async () => {
    if (!time) {
      toast.error("Please select a pickup time");
      return;
    }

    setIsLoading(true);
    try {
      // Validate and normalize the time input
      const [date, timePart] = time.split('T');
      if (!date || !timePart || timePart.length !== 5) { // Expect HH:mm
        throw new Error("Invalid pickup time format");
      }

      const normalizedTime = `${date}T${timePart}:00.000Z`; // e.g., "2025-08-23T18:55:00.000Z"
      console.log("Normalized Time:", normalizedTime); // Debug the constructed string
      const dateObject = new Date(normalizedTime);
      if (isNaN(+dateObject.getTime())) {
        throw new Error("Invalid pickup time format");
      }

      const response = await approveReport(reportId, { scheduledPickupTime: normalizedTime });
      toast.success("Report approved for pickup successfully!");
      if (onApproveSuccess) onApproveSuccess(response.data.report); // Send updated report to parent
      onClose(); // Close modal after successful approval
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Failed to approve report");
      console.log("Error approving report:", error.response?.data || error);
    } finally {
      setIsLoading(false);
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
        className="h-fit overflow-y-auto bg-white rounded-md w-full sm:w-150"
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
              Approve Report
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-600">
              Set the scheduled pickup time for approval
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="scheduledPickupTime" className="text-[13px]">
              Pickup Time
            </label>
            <input
              type="datetime-local"
              id="scheduledPickupTime"
              className="py-2.5 px-3 border rounded-md text-[13px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#79DA11]"
              value={time}
              onChange={handleTimeChange}
              min={new Date().toISOString().slice(0, 16)} // Prevent past dates
            />
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
              onClick={handleApprove}
              disabled={isLoading}
              className="px-4 py-2 bg-[#79DA11] text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 cursor-pointer text-xs sm:text-sm disabled:opacity-50"
            >
              {isLoading ? "Approving..." : "Approve"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right"  autoClose={3000} theme="colored" />
    </div>
  );
};

export default ApprovePickup;