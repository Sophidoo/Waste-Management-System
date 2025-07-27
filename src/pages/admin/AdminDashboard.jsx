import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Chart from "react-apexcharts";
import { FaCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const AdminDashboard = () => {
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
          <small className="text-[#71717A] text-xs font-medium tracking-wider">REGISTERED COMPANIES</small>
          <div>
            <h2 className="text-xl font-bold">10</h2>
          </div>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">TOTAL USERS</small>
          <div>
            <h2 className="text-xl font-bold">30</h2>
          </div>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">PICKED UP WASTE</small>
          <div>
            <h2 className="text-xl font-bold">130</h2>
          </div>
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
          <div className="w-full bg-white border border-[#E4E4E7] rounded-xl p-5 md:w-[65.76%]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap items-center gap-5">
                  <h3 className="text-sm sm:text-base font-semibold">Picked Up Waste</h3>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <div className="min-w-[600px]">
                  <Chart
                    options={area.options}
                    series={area.series}
                    type="area"
                    height={240}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="w-full bg-white border border-[#E4E4E7] rounded-xl p-5 flex flex-col items-center gap-4 md:w-[34.24%]">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-sm sm:text-base font-semibold">Users Onboarded</h3>
              <p className="text-gray-600 text-xs sm:text-[13px] font-medium">15 Jun- 21 Jun</p>
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

      {/* Upcoming Appointments */}
      <div className="w-full">
        <div className="w-full bg-white border border-[#E4E4E7] rounded-xl gap-y-3">
          <div className="p-6 pb-0 flex justify-between items-start flex-wrap gap-4 mb-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm sm:text-base font-semibold">Recent Waste Notifications</h3>
              <p className="text-[#71717A] text-xs sm:text-sm">Latest updates on waste reports and collections</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-150 w-full">
              <tbody>
                {/* New Waste Report */}
                <tr className="border-b border-[#E4E4E7] flex justify-between items-center p-5 pt-0">
                  <td className="min-w-[120px]">
                    <div className="text-[#166534] bg-[#DCFCE7] text-[10px] sm:text-xs font-medium flex items-center gap-2 px-3 py-1 rounded-full w-fit">
                      <FaCircle className="text-[#22C55E] text-[8px]" />
                      New Report
                    </div>
                  </td>
                  <td className="min-w-[200px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Plastic waste at 42 Marina Road</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">Reported by: Community Member</p>
                    </div>
                  </td>
                  <td className="min-w-[120px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Today</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">9:15AM</p>
                    </div>
                  </td>
                  <td className="text-[#A1A1AA]">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </td>
                </tr>
                
                {/* Waste Collected */}
                <tr className="border-b border-[#E4E4E7] flex justify-between items-center p-5">
                  <td className="min-w-[120px]">
                    <div className="text-[#1E40AF] bg-[#DBEAFE] text-[10px] sm:text-xs font-medium flex items-center gap-2 px-3 py-1 rounded-full w-fit">
                      <FaCircle className="text-[#3B82F6] text-[8px]" />
                      Collected
                    </div>
                  </td>
                  <td className="min-w-[200px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Organic waste at Lekki Market</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">Collected by: Waste Team A</p>
                    </div>
                  </td>
                  <td className="min-w-[120px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Today</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">7:30AM</p>
                    </div>
                  </td>
                  <td className="text-[#A1A1AA]">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </td>
                </tr>

                {/* Scheduled Pickup */}
                <tr className="border-b border-[#E4E4E7] flex justify-between items-center p-5">
                  <td className="min-w-[120px]">
                    <div className="text-[#713F12] bg-[#FEF9C3] text-[10px] sm:text-xs font-medium flex items-center gap-2 px-3 py-1 rounded-full w-fit">
                      <FaCircle className="text-[#FACC15] text-[8px]" />
                      Scheduled
                    </div>
                  </td>
                  <td className="min-w-[200px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">E-waste at Computer Village</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">Scheduled for tomorrow</p>
                    </div>
                  </td>
                  <td className="min-w-[120px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Today</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">10:00AM</p>
                    </div>
                  </td>
                  <td className="text-[#A1A1AA]">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </td>
                </tr>

                {/* Hazardous Waste Alert */}
                <tr className="border-b border-[#E4E4E7] flex justify-between items-center p-5">
                  <td className="min-w-[120px]">
                    <div className="text-[#7F1D1D] bg-red-100 text-[10px] sm:text-xs font-medium flex items-center gap-2 px-3 py-1 rounded-full w-fit">
                      <FaCircle className="text-red-500 text-[8px]" />
                      Urgent
                    </div>
                  </td>
                  <td className="min-w-[200px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Chemical waste at Industrial Area</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">Requires special handling</p>
                    </div>
                  </td>
                  <td className="min-w-[120px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Yesterday</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">4:45PM</p>
                    </div>
                  </td>
                  <td className="text-[#A1A1AA]">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </td>
                </tr>

                {/* Recycling Update */}
                <tr className="border-b border-[#E4E4E7] flex justify-between items-center p-5">
                  <td className="min-w-[120px]">
                    <div className="text-[#065F46] bg-[#D1FAE5] text-[10px] sm:text-xs font-medium flex items-center gap-2 px-3 py-1 rounded-full w-fit">
                      <FaCircle className="text-[#10B981] text-[8px]" />
                      Recycled
                    </div>
                  </td>
                  <td className="min-w-[200px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">500kg plastic recycled</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">At Ikeja Recycling Center</p>
                    </div>
                  </td>
                  <td className="min-w-[120px]">
                    <div className="flex flex-col gap-1 text-left">
                      <h3 className="text-[13px] sm:text-sm font-semibold">Yesterday</h3>
                      <p className="text-[#71717A] text-xs sm:text-sm">2:15PM</p>
                    </div>
                  </td>
                  <td className="text-[#A1A1AA]">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;