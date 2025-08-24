import { useState, useEffect } from "react";
import { FaClock, FaMapPin, FaUser } from "react-icons/fa";
import WasteKanban from "../../components/ui/WasteKanban";
import WasteTable from "../../components/ui/WasteTable";
import DashboardWasteTable from "../../components/ui/DashboardWasteTable";
import { getReportStats } from "../../services/api"; // Adjust path as needed

const CompanyWaste = () => {
  const [kanban, setKanban] = useState(true);
  const [stats, setStats] = useState({
    totalReports: 0,
    pendingReports: 0,
    approvedReports: 0,
    pickedUpWaste: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await getReportStats();
        console.log("Report Stats:", response.data);
        setStats(response.data);
        setError(null);
      } catch (err) {
        console.log("Error fetching stats:", err);
        setError("Failed to load stats. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6 gap-y-6 flex-wrap">
        <div className="leftInventoryHeading flex flex-col gap-1 flex-wrap">
          <h2 className="text-base sm:text-lg font-medium flex items-center flex-wrap gap-2">
            Waste Reports and Information
            <span className="bg-[#E6F1FF] text-[#2584F8] text-xs font-medium px-2 py-0.5 rounded-full">
              {loading ? "Loading..." : `${stats.totalReports} reports`}
            </span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-[13px]">
            {kanban
              ? "View Information on wastes you have approved for today"
              : "View your history of wastes you've picked up"}
          </p>
        </div>
        {kanban ? (
          <button
            className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-xs cursor-pointer hover:shadow-md transition"
            onClick={() => setKanban(false)}
          >
            View Waste History
          </button>
        ) : (
          <button
            className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-xs cursor-pointer hover:shadow-md transition"
            onClick={() => setKanban(true)}
          >
            View Today Waste
          </button>
        )}
      </div>

      {/* SUMMARY CARDS */}
      <div className="flex justify-between gap-[2.5%] gap-y-3 flex-wrap mb-10">
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[31%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">
            Total Reports
          </small>
          <div>
            <h2 className="text-xl font-bold">
              {loading ? "Loading..." : stats.totalReports}
            </h2>
          </div>
        </div>

        {/* <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[31%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">
            Pending Reports
          </small>
          <div>
            <h2 className="text-xl font-bold">
              {loading ? "Loading..." : stats.pendingReports}
            </h2>
          </div>
        </div> */}

        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[31%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">
            Approved Reports
          </small>
          <div>
            <h2 className="text-xl font-bold">
              {loading ? "Loading..." : stats.approvedReports}
            </h2>
          </div>
        </div>

        <div className="bg-primary text-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[31%] min-w-[200px]">
          <small className="text-white text-xs font-medium tracking-wider">
            Picked Up Waste
          </small>
          <div>
            <h2 className="text-xl font-bold">
              {loading ? "Loading..." : stats.pickedUpWaste}
            </h2>
          </div>
        </div>
      </div>

      {/* WASTE KANABN VIEW */}
      {kanban && <WasteKanban />}
      {/* WASTE TABLE VIEW */}
      {!kanban && <DashboardWasteTable />}
    </>
  );
};

export default CompanyWaste;