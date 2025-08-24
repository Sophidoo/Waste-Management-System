import { useState, useEffect } from "react";
import { FaClock, FaMapPin, FaUser } from "react-icons/fa";
import { getReportsByStatus } from "../../services/api"; // Adjust path as needed

const WasteKanban = () => {
  const [pendingReports, setPendingReports] = useState([]);
  const [approvedReports, setApprovedReports] = useState([]);
  const [pickedUpReports, setPickedUpReports] = useState([]);
  const [loading, setLoading] = useState({ pending: true, approved: true, pickedUp: true });
  const [showMap, setShowMap] = useState({});
  const [showImages, setShowImages] = useState({});

  // Fetch reports for each status concurrently
  useEffect(() => {
    const fetchReports = async (status, setter) => {
      try {
        const response = await getReportsByStatus(status);
        console.log(`${status} Reports:`, response.data.reports || []);
        return { status, reports: response.data.reports || [] };
      } catch (error) {
        console.error(`Error fetching ${status} reports:`, error);
        return { status, reports: [] };
      }
    };

    const statuses = ["pending", "approved", "picked up"];
    Promise.all(statuses.map((status) => fetchReports(status, null)))
      .then((results) => {
        results.forEach(({ status, reports }) => {
          if (status === "pending") setPendingReports(reports);
          else if (status === "approved") setApprovedReports(reports);
          else if (status === "picked up") setPickedUpReports(reports);
        });
        setLoading({ pending: false, approved: false, pickedUp: false }); // Set all to false once done
      })
      .catch((error) => {
        console.error("Error fetching all reports:", error);
        setLoading({ pending: false, approved: false, pickedUp: false }); // Ensure loading stops on error
      });
  }, []);

  useEffect(() => {
    console.log("Pending Reports:", pendingReports);
    console.log("Approved Reports:", approvedReports);
    console.log("Picked Up Reports:", pickedUpReports);
  }, [pendingReports, approvedReports, pickedUpReports]);

  // Toggle map and image visibility
  const toggleMap = (id) => setShowMap((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleImages = (id) => setShowImages((prev) => ({ ...prev, [id]: !prev[id] }));

  // Render a waste card
  const renderWasteCard = (report, status) => {
    const isApproved = status === "approved";
    const isPickedUp = status === "picked up";
    const mapUrl = report.mapLocation
  ? `https://www.google.com/maps?q=${report.mapLocation.latitude},${report.mapLocation.longitude}&hl=es;z=14&output=embed`
  : "";

    return (
      <div key={report._id} className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
        <h3 className="text-sm font-medium md:text-base">{report.type || "Unknown Waste"}</h3>

        <div className="flex flex-col gap-y-2 py-2">
          <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2">
            <FaMapPin /> {report.location || "Unknown Location"}
          </p>
          <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2">
            <FaUser /> Reported by: {report.reportedBy?.name || "Unknown"}
          </p>
          <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2">
            <FaClock /> Preferred PickUp: {report.preferredPickupTime ? new Date(report.preferredPickupTime).toDateString() : "Not Set"}
          </p>
        </div>

        {(isApproved || isPickedUp) && (
          <div className={`p-2 flex flex-col gap-y-2 ${isPickedUp ? "bg-emerald-50" : "bg-blue-50"}`}>
            <h4 className="text-xs sm:text-[13px]">
              Assigned to: {report.assignedTo?.name || report.pickedUpBy?.name || "Unassigned"}
            </h4>
            <p className="text-gray-700 text-[11px] sm:text-xs">
              {isApproved
                ? `Scheduled Pickup: ${report.scheduledPickupTime ? new Date(report.scheduledPickupTime).toDateString() : "Not Scheduled"}`
                : `Pickup at: ${report.pickedUpDay ? new Date(report.pickedUpDay).toDateString() : "N/A"}`}
            </p>
          </div>
        )}

        <div className="flex items-center gap-y-3 gap-x-2 mt-2 cursor-pointer">
          {
            report.mapLocation.latitude !== 'NaN' && report.mapLocation.longitude !== 'NaN' ?
            <button
            onClick={() => toggleMap(report._id)}
            className={`w-full py-1 px-2 text-[11px] ${
              isPickedUp
                ? "bg-green-600 border border-green-600 text-white"
                : "bg-blue-300 border border-blue-300 text-black"
            }`}
          >
            {showMap[report._id] ? "Hide Map" : "Show Map"}
          </button>
          : ""
          }
          <button
            onClick={() => toggleImages(report._id)}
            className={`w-full py-1 px-2 text-[11px] ${
              isPickedUp
                ? "bg-white border border-green-600 text-black font-medium"
                : "bg-white border border-blue-300 text-black font-medium"
            }`}
          >
            {showImages[report._id] ? "Hide Images" : "Show Images"}
          </button>
        </div>

        {showImages[report._id] && report.images && report.images.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {report.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Waste ${index + 1}`}
                className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"
              />
            ))}
          </div>
        )}

        {showMap[report._id] && mapUrl && (
          <iframe
            src={mapUrl}
            className="w-full h-21 sm:h-25 rounded-md shadow-sm mt-2"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    );
  };

  // Render Kanban column
  const renderColumn = (title, reports, status, count) => (
    <div className="flex flex-col gap-y-5 w-1/3">
      <div className={`flex gap-x-4 items-center bg-white border-t-5 ${
        status === "pending" ? "border-t-yellow-500" 
        : status === "approved" ? "border-t-blue-500" 
        : "border-t-green-500"
      } border border-gray-200 rounded-md shadow-md shadow-gray-100 px-3 py-3`}>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <small className={`text-[10px] ${
          status === "pending" ? "bg-yellow-100 text-yellow-700" 
          : status === "approved" ? "bg-blue-100 text-blue-700" 
          : "bg-green-100 text-green-700"
        } font-medium pt-0.5 pb-0.2 px-2 rounded-full`}>{count} {status}</small>
      </div>
      {loading[status] ? (
        <p className="p-4 text-center text-gray-500">Loading...</p>
      ) : reports.length > 0 ? (
        reports.map((report) => renderWasteCard(report, status))
      ) : (
        <p className="p-4 text-center text-gray-500">No {status} waste</p>
      )}
    </div>
  );

  return (
    <section className="overflow-x-auto mt-6">
      <div className="min-w-230 w-full flex gap-x-6 justify-between">
        {renderColumn("Pending", pendingReports, "pending", pendingReports.length)}
        {renderColumn("Approved", approvedReports, "approved", approvedReports.length)}
        {renderColumn("Picked Up", pickedUpReports, "picked up", pickedUpReports.length)}
      </div>
    </section>
  );
};

export default WasteKanban;