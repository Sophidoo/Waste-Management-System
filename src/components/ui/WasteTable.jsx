import { useState, useEffect } from "react";
import { FiChevronUp, FiChevronDown, FiFilter, FiSearch, FiEdit2, FiTrash2, FiEye, FiMapPin } from "react-icons/fi";
import { getReports } from "../../services/api"; // Adjust path as needed
import PickedupModal from "../modals/PickedUpModal"; // Adjust path as needed
import ApprovePickupModal from "../modals/ApprovePickup"; // Adjust path as needed
import { GrStatusGood } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";

const WasteTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: "reportedDate", direction: "desc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [wasteData, setWasteData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPickedupModalOpen, setIsPickedupModalOpen] = useState(false); // For PickedupModal
  const [isApprovePickupModalOpen, setIsApprovePickupModalOpen] = useState(false); // For ApprovePickupModal
  const [selectedReportId, setSelectedReportId] = useState(null); // Store the report ID for modals

  // Fetch waste data
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await getReports({
          page: currentPage,
          limit: itemsPerPage,
        });
        console.log("API Response:", response.data); // Debug the response structure
        setWasteData(response.data.reports || []);
        setTotalItems(response.data.totalItems || 0);
        setError(null);
      } catch (err) {
        console.error("Error fetching reports:", err);
        setError("Failed to load reports. Please try again.");
        setWasteData([]);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [currentPage]); // Refetch on page change

  // Filter and sort data
  const filteredData = wasteData.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle modal open/close
  const openPickedupModal = (reportId) => {
    setSelectedReportId(reportId);
    setIsPickedupModalOpen(true);
  };

  const openApprovePickupModal = (reportId) => {
    setSelectedReportId(reportId);
    setIsApprovePickupModalOpen(true);
  };

  const closePickedupModal = () => {
    setIsPickedupModalOpen(false);
    setSelectedReportId(null);
  };

  const closeApprovePickupModal = () => {
    setIsApprovePickupModalOpen(false);
    setSelectedReportId(null);
  };

  // Handle successful approval/pickup from modals
  const handleApproveSuccess = (updatedReport) => {
    setWasteData((prevData) =>
      prevData.map((item) => (item._id === updatedReport._id ? updatedReport : item))
    );
    closeApprovePickupModal();
  };

  const handlePickupSuccess = (updatedReport) => {
    setWasteData((prevData) =>
      prevData.map((item) => (item._id === updatedReport._id ? updatedReport : item))
    );
    closePickedupModal();
  };

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto wasteTable">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("wasteType")}
              >
                <div className="flex items-center">
                  Waste Type
                  {sortConfig.key === "wasteType" && (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("address")}
              >
                <div className="flex items-center">
                  Location
                  {sortConfig.key === "address" && (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("reportedBy")}
              >
                <div className="flex items-center">
                  Reported By
                  {sortConfig.key === "reportedBy" && (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("assignedCompany")}
              >
                <div className="flex items-center">
                  Assigned To
                  {sortConfig.key === "assignedCompany" && (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("status")}
              >
                <div className="flex items-center">
                  Status
                  {sortConfig.key === "status" && (
                    sortConfig.direction === "asc" ? (
                      <FiChevronUp className="ml-1" />
                    ) : (
                      <FiChevronDown className="ml-1" />
                    )
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-xs sm:text-[13px] text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-xs sm:text-[13px] text-red-500">
                  {error}
                </td>
              </tr>
            ) : currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    {item.wasteType || "Unknown"}
                  </td>
                  <td className="px-6 py-4 text-xs sm:text-[13px] text-gray-500 max-w-100">
                    <div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1 text-gray-400" />
                        {item.address || "Unknown Location"}
                      </div>
                      <p className="text-[11px] sm:text-xs mt-1">
                        Lat: {item.location?.lat || "N/A"}, Long: {item.location?.lng || "N/A"}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black font-medium">
                        {item.reportedBy?.name || item.reportedBy || "Unknown"}
                      </p>
                      <p className="text-[11px] sm:text-xs">
                        Report Date:{" "}
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black font-medium">{item.assignedCompany || "N/A"}</p>
                      {
                        item.status === "approved" ?
                        <p className="text-[11px] sm:text-xs">
                          Scheduled Time: {item.scheduledPickupTime
                          ? new Date(item.scheduledPickupTime).toLocaleDateString()
                          : "N/A"}
                        </p>
                        : item.status === "picked up" ?
                        <p className="text-[11px] sm:text-xs">
                          Picked up: {item.pickedUpDay
                          ? new Date(item.pickedUpDay).toLocaleDateString()
                          : "N/A"}
                        </p> :
                        <p className="text-[11px] sm:text-xs">
                          Preffered Time: {item.preferredPickupTime
                          ? new Date(item.preferredPickupTime).toLocaleDateString()
                          : "N/A"}
                        </p>
                      }
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 inline-flex text-[10px] font-medium rounded-full ${
                        item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "Approved"
                          ? "bg-blue-100 text-blue-800"
                          : item.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status || "Unknown"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    <div className="flex items-center justify-center">
                      {item.status === "approved" && (
                        <button
                          onClick={() => openPickedupModal(item._id)}
                          className="text-green-600 hover:text-green-900 cursor-pointer"
                        >
                          <GrStatusGood className="h-4 w-4" />
                        </button>
                      )}
                      {item.status === "pending" && (
                        <button
                          onClick={() => openApprovePickupModal(item._id)}
                          className="text-blue-600 hover:text-blue-900 cursor-pointer"
                        >
                          <MdPendingActions className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-xs sm:text-[13px] text-gray-500">
                  No waste collection requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-xs sm:text-[13px] text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, totalItems)}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-xs sm:text-[13px] font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative inline-flex items-center px-4 py-2 border text-xs sm:text-[13px] font-medium ${
                    currentPage === page
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-800"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-xs sm:text-[13px] font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isPickedupModalOpen && (
        <PickedupModal
          onClose={closePickedupModal}
          reportId={selectedReportId}
          onApproveSuccess={handlePickupSuccess}
        />
      )}
      {isApprovePickupModalOpen && (
        <ApprovePickupModal
          onClose={closeApprovePickupModal}
          reportId={selectedReportId}
          onApproveSuccess={handleApproveSuccess}
        />
      )}
    </div>
  );
};

export default WasteTable;