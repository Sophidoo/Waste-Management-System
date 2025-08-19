
import pending from "../assets/icons/wall-clock.png"
import approved from "../assets/icons/quality.png"
import pickedUp from "../assets/icons/recycling-truck (1).png"
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getReports } from "../services/api";

const Waste = () => {
    
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const response = await getReports(page, 10);
        console.log(response)
        setReports(response.data.reports || []);
        setTotalPages(response.data.totalPages || 1);
        console.log("Fetched reports:", response.data); // Debug
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch reports", {
          toastId: "error-fetch-reports",
        });
        console.log(error)
        console.error("Fetch reports error:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, [page]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return pending;
      case "approved":
        return approved;
      case "pickedUp":
        return pickedUp;
      default:
        return pending;
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const generateMapUrl = (latitude, longitude) => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude},${longitude}!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng`;
  };

    return <>
        <section className="flex flex-col gap-y-3 items-center pb-12 pt-20 sm:pt-25 px-4 sm:px-20 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Reported Waste</h1>
            <p className="text-xs sm:text-[13px] font-medium text-gray-600 w-full md:w-180 lg:w-200">View all waste reports submitted by users across different areas. Track the status of each report from pending to pickup, and stay informed as we work together toward cleaner communities.</p>
        </section>

        {loading && <p className="text-center">Loading reports...</p>}

       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 px-4 sm:px-20 mb-20">
        {reports.length === 0 && !loading ? (
          <p className="text-center col-span-full">No reports found.</p>
        ) : (
          reports.map((report) => (
            <div
              key={report._id}
              className={`flex flex-col gap-y-4 rounded-md border ${
                report.status === "approved" ? "bg-[#E2EDE3]" : "bg-white"
              } border-gray-200 p-4`}
            >
              <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3 items-center">
                <iframe
                  src={generateMapUrl(report.mapLocation.latitude, report.mapLocation.longitude)}
                  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex flex-col gap-y-1 w-full">
                  <div className="flex w-full text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                    <p>{report.type.toUpperCase()}</p>
                    <div className="flex items-center gap-x-2">
                      <img src={getStatusIcon(report.status)} alt={report.status} className="w-4 h-4" />
                      <p>{report.quantity ? `${report.quantity}mg` : "N/A"}</p>
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">{report.location}</h3>
                  <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                    <p className="text-gray-600">Preferred Pickup Time:</p>
                    <p>{formatDateTime(report.preferredPickupTime)}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                    <p className="text-gray-600">Date Reported:</p>
                    <p>{formatDateTime(report.createdAt)}</p>
                  </div>
                </div>
              </div>
              <hr className={`border ${report.status === "approved" ? "border-gray-50" : "border-gray-200"}`} />
              <div className="flex flex-wrap gap-2">
                {report.images && report.images.length > 0 ? (
                  report.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Waste image ${index + 1}`}
                      className="w-17 h-12 sm:w-20 sm:h-15 rounded-sm object-cover"
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center w-full h-12 sm:h-15 bg-gray-200 rounded-sm">
                    <h3 className="text-xs sm:text-[13px]">No Image Uploaded</h3>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-x-4 mt-6">
          <button
            className="bg-[#128D7F] hover:bg-[#0B544C] text-white px-4 py-2 rounded"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="bg-[#128D7F] hover:bg-[#0B544C] text-white px-4 py-2 rounded"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>

}

export default Waste
