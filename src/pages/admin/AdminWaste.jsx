import { useState } from "react"
import { FaClock, FaMapPin, FaUser } from "react-icons/fa"
import WasteKanban from "../../components/ui/WasteKanban"
import WasteTable from "../../components/ui/WasteTable"


const AdminWaste = () => {

  const [kanban, setKanban] = useState(true)

  return <>
    <div className="flex justify-between items-center mb-6 gap-y-6 flex-wrap">
      <div className="leftInventoryHeading flex flex-col gap-1 flex-wrap">
          <h2 className="text-base sm:text-lg font-medium flex items-center flex-wrap gap-2">
             Waste Reports and Information
              <span className="bg-[#E6F1FF] text-[#2584F8] text-xs font-medium px-2 py-0.5 rounded-full">24 reports</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-[13px]">Here you'll see all waste reports by users {kanban ? "today" : "previously"}, and updated information about the waste</p>
      </div>
      {
        kanban ?
        <button className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-xs cursor-pointer hover:shadow-md transition" onClick={() => setKanban(false)}>View Waste History</button>
        :
        <button className="bg-primary text-white px-4 py-2 rounded-sm font-medium text-xs cursor-pointer hover:shadow-md transition" onClick={() => setKanban(true)}>View Today Waste</button>
      }
    </div>


    {/* SUMMARY CARDS */}
    <div className="flex justify-between gap-[2.5%] gap-y-3 flex-wrap">
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">Total Reports</small>
          <div>
            <h2 className="text-xl font-bold">10</h2>
          </div>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">Pending Reports</small>
          <div>
            <h2 className="text-xl font-bold">30</h2>
          </div>
        </div>
        
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-[#71717A] text-xs font-medium tracking-wider">Approved Reports</small>
          <div>
            <h2 className="text-xl font-bold">130</h2>
          </div>
        </div>
        
        <div className="bg-primary text-white border border-[#E4E4E7] rounded-xl p-4 flex flex-col items-start gap-3 w-full xsm:w-[23.125%] min-w-[200px]">
          <small className="text-white text-xs font-medium tracking-wider">Picked Up Waste</small>
          <div>
            <h2 className="text-xl font-bold">1200</h2>
          </div>
        </div>
      </div>

      {/* WASTE KANABN VIEW */}
      {
        kanban && 
        <WasteKanban/>
      }
      {/* WASTE TABLE VIEW */}
      {
        !kanban && 
        <WasteTable/>
      }
  </>

}

export default AdminWaste