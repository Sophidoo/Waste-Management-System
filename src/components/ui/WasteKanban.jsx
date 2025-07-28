import { FaClock, FaMapPin, FaUser } from "react-icons/fa"


const WasteKanban = () => {

    return<>

        <section className="overflow-x-auto mt-6">

          <div className=" min-w-230 w-full flex gap-x-6 justify-between">

            {/* PENDING WASTE */}
            <div className="flex flex-col gap-y-5 w-1/3">
              <div className="flex gap-x-4 items-center bg-white border-t-5 border-t-yellow-500 border border-gray-200 rounded-md shadow-md shadow-gray-100 px-3 py-3">
                <p className="text-sm font-medium text-gray-700">Pending</p>
                <small className="text-[10px] bg-yellow-100 text-yellow-700 font-medium pt-0.5 pb-0.2 px-2 rounded-full">200 pending</small>
              </div>

              {/* WASTE CARD */}
              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Plastic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full h-21  sm:h-25 rounded-md shadow-sm mt-2" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Organic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Plastic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full h-21  sm:h-25 rounded-md shadow-sm mt-2" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Plastic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>
              </div>
            </div>

            {/* APPROVED WASTE */}
            <div className="flex flex-col gap-y-5 w-1/3">
              <div className="flex gap-x-4 items-center bg-white border-t-5 border-t-blue-500 border border-gray-200 rounded-md shadow-md shadow-gray-100 px-3 py-3">
                <p className="text-sm font-medium text-gray-700">Approved</p>
                <small className="text-[10px] bg-blue-100 text-blue-700 font-medium pt-0.5 pb-0.2 px-2 rounded-full">200 approved</small>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Plastic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>

                <div className="bg-blue-50 p-2  flex flex-col gap-y-2">
                  <h4 className="text-xs sm:text-[13px]">Assigned to: Eco-Waste Disposal Company</h4>
                  <p className="text-gray-700 text-[11px] sm:text-xs">Scheduled Pickup: {new Date().toDateString()}</p>
                </div>

                <div className="flex items-center gap-y-3 gap-x-2 mt-2 cursor-pointer">
                  <button className="w-full bg-blue-300 border border-blue-300 text-[11px] text-black py-1 px-2 cursor-pointer">Show Map</button>
                   <button className="w-full bg-white border border-blue-300 text-[11px] text-black font-medium py-1 px-2 cursor-pointer">Show Images</button>
                </div>
                <div className="hidden  flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="hidden w-full h-21  sm:h-25 rounded-md shadow-sm mt-2" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* PICKED UP WASTE */}
            <div className="flex flex-col gap-y-5 w-1/3">
              <div className="flex gap-x-4 items-center bg-white border-t-5 border-t-green-500 border border-gray-200 rounded-md shadow-md shadow-gray-100 px-3 py-3">
                <p className="text-sm font-medium text-gray-700">Picked Up</p>
                <small className="text-[10px] bg-green-100 text-green-700 font-medium pt-0.5 pb-0.2 px-2 rounded-full">200 Picked Up</small>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md flex flex-col gap-y-1 shadow-gray-100">
                <h3 className="text-sm font-medium md:text-base">Plastic Waste</h3>

                <div className="flex flex-col gap-y-2 py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaMapPin/> Omega Lodge B, East-West Road</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaUser/> Reported by: John Doe</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 flex items-center gap-x-2"><FaClock/> Preferred PickUp: {new Date().toDateString()}</p>
                </div>

                <div className="bg-emerald-50 p-2  flex flex-col gap-y-2">
                  <h4 className="text-xs sm:text-[13px]">Assigned to: Eco-Waste Disposal Company</h4>
                  <p className="text-gray-700 text-[11px] sm:text-xs">Pickup at: {new Date().toDateString()}</p>
                </div>

                <div className="flex items-center gap-y-3 gap-x-2 mt-2 cursor-pointer">
                  <button className="w-full bg-green-600 border border-green-600 text-[11px] text-white py-1 px-2 cursor-pointer">Show Map</button>
                   <button className="w-full bg-white border border-green-600 text-[11px] text-black font-medium py-1 px-2 cursor-pointer">Show Images</button>
                </div>

                
              </div>
            </div>

          </div>

      </section>

    </>
}

export default WasteKanban