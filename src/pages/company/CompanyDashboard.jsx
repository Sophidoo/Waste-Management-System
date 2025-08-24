                                  import { useState, useEffect } from "react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Chart from "react-apexcharts";
import { FaCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import WasteTable from "../../components/ui/WasteTable";
import DashboardWasteTable from "../../components/ui/DashboardWasteTable";
import MiniDashboardTable from "../../components/ui/MiniDashboardTable";
import { getTodayReports, getWeeklyPickups, getCompanyStats, getNearbyReports } from "../../services/api"; // Adjust path

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const [todayReports, setTodayReports] = useState([]);
  const [weeklyPickups, setWeeklyPickups] = useState({});
  const [companyStats, setCompanyStats] = useState({
    approvedTodayCount: 0,
    pickedUpTodayCount: 0,
    totalPickedUp: 0,
    totalReports: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching dashboard data...");
      try {
        setLoading(true);
        const [nearbyResponse, weeklyResponse, statsResponse] = await Promise.all([
          getNearbyReports(),
          getWeeklyPickups(),
          getCompanyStats({ params: { page: 1, limit: 10 } }),
        ]);
        console.log("Today Reports:", nearbyResponse.data);
        console.log("Weekly Pickups:", weeklyResponse.data);
        console.log("Company Stats:", statsResponse.data);
        setTodayReports(nearbyResponse.data.reports);
        setWeeklyPickups(weeklyResponse.data.pickupDayStats
 || {});
        setCompanyStats({
          approvedTodayCount: statsResponse.data.approvedToday.count,
          pickedUpTodayCount: statsResponse.data.pickedUpToday,
          totalPickedUp: statsResponse.data.totalPickedUp,
          totalReports: statsResponse.data.totalReports,
        });
      } catch (error) {
        console.log("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const bar = {
    options: {
      chart: {
        type: "bar",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      plotOptions: {
        bar: {
          borderRadius: 1,
          columnWidth: "70%",
          distributed: true,
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: "#52525B",
            fontSize: "11px",
            fontFamily: "Inter, sans-serif",
          },
        },
      },
      yaxis: {
        show: false,
        labels: { show: false },
      },
      grid: { show: false },
      colors: ["#137D17"],
      tooltip: {
        enabled: true,
        style: {
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Pickups",
        data: [
          weeklyPickups.mon || 0,
          weeklyPickups.tue || 0,
          weeklyPickups.wed || 0,
          weeklyPickups.thu || 0,
          weeklyPickups.fri || 0,
          weeklyPickups.sat || 0,
          weeklyPickups.sun || 0,
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col gap-7">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold">Welcome Back John Doe</h3>
      </div>

      {/* Summary Cards */}
      <div className="flex justify-between gap-[2.5%] gap-y-3 flex-wrap">
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">{loading ? "..." : companyStats.approvedTodayCount}</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">APPROVALS TODAY</small>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">{loading ? "..." : companyStats.pickedUpTodayCount}</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">PICKED UP TODAY</small>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">{loading ? "..." : companyStats.totalPickedUp}</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">TOTAL PICKED UP WASTE</small>
        </div>
        
        <div className="bg-primary text-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-white text-xs font-medium tracking-wider">REPORTED WASTE</small>
          <div>
            <h2 className="text-xl font-bold">{loading ? "..." : companyStats.totalReports}</h2> {/* Placeholder, update if needed */}
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-[2.5%]">
        {/* Performance Chart */}
        <div className="overflow-x-auto w-full md:w-[65.76%] flex flex-col gap-y-2 bg-white rounded-md shadow-sm border border-gray-200">
          <div className="w-full flex flex-col justify-start items-start px-6 py-3 gap-y-2">
            <h3 className="text-sm sm:text-base font-medium">Today Reports</h3>
            <p className="text-gray-600 text-xs sm:text-[13px] font-normal">Information on waste reports closest to you</p>
          </div>
          <MiniDashboardTable reports={todayReports}  loading={loading} />
        </div>

        {/* Bar Chart */}
        <div className="w-full bg-white border border-[#E4E4E7] rounded-xl p-5 flex flex-col items-center h-90 gap-4 md:w-[34.24%]">
          <div className="w-full flex flex-col justify-start items-start">
            <h3 className="text-sm sm:text-base font-medium">Picked Up Waste</h3>
            <p className="text-gray-600 text-xs sm:text-[13px] font-normal">You can see the most effective days</p>
          </div>
          <div className="w-full h-[205px]">
            <Chart
              options={bar.options}
              series={bar.series}
              type="bar"
              height={window.innerWidth >= 768 ? 250 : "100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;