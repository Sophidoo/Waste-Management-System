import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Chart from "react-apexcharts";
import { FaCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import WasteTable from "../../components/ui/WasteTable";
import DashboardWasteTable from "../../components/ui/DashboardWasteTable";
import MiniashboardTable from "../../components/ui/MiniDashboardTable";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const area = {
    options: {
      chart: {
        type: "area",
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#137D17"],
      },
      fill: {
        type: "solid",
        colors: ["#daedda"],
      },
      markers: {
        size: 0,
        colors: ["#137D17"],
        strokeColors: "#fff",
        strokeWidth: 2,
      },
      xaxis: {
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        labels: {
          style: {
            colors: "#52525B",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif", 
            letterSpacing: "0px"
          },
        },
        crosshairs: {
          show: true,
          stroke: {
            color: "#E4E4E7",
            width: 1,
            dashArray: 0
          }
        },
        tooltip: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        show: false,
        lines: {
          show: true
        }
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '10px',
          fontFamily: undefined,
          color: '#79DA11',
        },
        custom: ({ series, dataPointIndex, w }) => {
          const names = w.globals.seriesNames;
          const tooltips = series.map((s, i) => {
            const value = s[dataPointIndex];
            return `
              <div style="
                margin-bottom: 4px;
                color: #71717A;
                font-size: 12px;
                font-family: 'Plus Jakarta Sans', sans-serif;
              ">
                ${names[i]}: ${value}
              </div>
            `;
          }).join("");
      
          return `
            <div style="
              background: #fff;
              padding: 8px 13px;
              border: 2px solid #ffffff;
              border-radius: 4px;
              width: max-content;
              box-shadow: 0 2px 6px rgba(0,0,0,0.08);
              position: relative;
            ">
              ${tooltips}
              <div style="
                position: absolute;
                bottom: -6px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid white;
              "></div>
            </div>
          `;
        }
      },
      grid: {
        show: true,
        borderColor: "#F4F4F5"
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 15, 30, 25, 40, 5, 10, 10, 15, 10, 20],
      },
    ]
  };

  const bar = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      plotOptions: {
        bar: {
          borderRadius: 1,
          columnWidth: '70%',
          distributed: true,
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: '#52525B',
            fontSize: '11px',
            fontFamily: 'Inter, sans-serif'
          }
        }
      },
      yaxis: {
        show: false,
        labels: { show: false }
      },
      grid: { show: false },
      colors: ['#137D17'],
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif'
        }
      },
      legend: {
        show: false
      }
    },
    series: [{
      name: 'Users',
      data: [12, 19, 15, 8, 21, 5, 13] // Sample data for last 7 days
    }]
  };

  return (
    <div className="flex flex-col gap-7">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold">
          Welcome Back John Doe
        </h3>
      </div>

      {/* Summary Cards */}
      <div className="flex justify-between gap-[2.5%] gap-y-3 flex-wrap">
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">10</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">APPROVALS TODAY</small>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">30</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">PICKED UP TODAY</small>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <div>
            <h2 className="text-xl font-bold">130</h2>
          </div>
          <small className="text-[#71717A] text-xs font-medium tracking-wider">TOTAL PICKED UP WASTE</small>
        </div>
        
        <div className="bg-primary text-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-white text-xs font-medium tracking-wider">REPORTED WASTE</small>
          <div>
            <h2 className="text-xl font-bold">1200</h2>
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

            <MiniashboardTable/>
        </div>

          {/* Donut Chart */}
          <div className="w-full bg-white border border-[#E4E4E7] rounded-xl p-5 flex flex-col items-center h-90 gap-4 md:w-[34.24%]">
            <div className="w-full flex flex-col justify-start items-start">
              <h3 className="text-sm sm:text-base font-medium">Picked Up Waste</h3>
              <p className="text-gray-600 text-xs sm:text-[13px] font-normal">Wastes picked up from Jun 21 - Jun 28</p>
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