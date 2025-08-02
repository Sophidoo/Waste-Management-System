
import pending from "../assets/icons/wall-clock.png"
import approved from "../assets/icons/quality.png"
import pickedUp from "../assets/icons/recycling-truck (1).png"

const Waste = () => {

    return <>
        <section className="flex flex-col gap-y-3 items-center pb-12 pt-20 sm:pt-25 px-4 sm:px-20 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Reported Waste</h1>
            <p className="text-xs sm:text-[13px] font-medium text-gray-600 w-full md:w-180 lg:w-200">View all waste reports submitted by users across different areas. Track the status of each report from pending to pickup, and stay informed as we work together toward cleaner communities.</p>
        </section>
        {/* <hr className="mx-4 sm:mx-20 border border-gray-300"/> */}
        <div className="flex flex-col xs:flex-row justify-between  sm:mx-20 bg-white mb-15 border border-gray-200">
            <div className="bg-white hover:shadow-md  text-gray-700  cursor-pointer py-3 px-4 sm:px-6 w-full xs:w-1/3 flex justify-between border-b-3 border-b-primary border-r-1 border-r-gray-200">
                <p className="text-xs sm:text-sm font-medium">Pending</p>
                <img src={pending} alt="" className="h-5 w-auto "/>
            </div>
            <div className="bg-white hover:shadow-md text-gray-700  cursor-pointer py-3 px-4 w-full xs:w-1/3 flex justify-between border-b-3 border-b-gray-300 border-r-1 border-r-gray-200">
                <p className="text-xs sm:text-sm font-medium ">Approved</p>
                <img src={approved} alt="" className="h-5 w-auto "/>
            </div>
            <div className="bg-white hover:shadow-md text-gray-700  cursor-pointer py-3 px-4 w-full xs:w-1/3 flex justify-between  border-b-3 border-b-gray-300">
                <p className="text-xs sm:text-sm font-medium ">Picked Up</p>
                <img src={pickedUp} alt="" className="h-5 w-auto "/>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10  px-4 sm:px-20 mb-20">
            <div className="flex flex-col gap-y-4 rounded-md border bg-white border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-200"/>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 rounded-md border bg-white border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-200"/>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
            </div>
            <div className="flex flex-col gap-y-4  rounded-md border bg-[#E2EDE3] border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-50"/>
                <div className="flex flex-wrap justify-center items-center gap-2 w-full h-12 sm:h-15 bg-white">
                    <h3 className="text-xs sm:text-[13px]">No Image Uploaded</h3>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 rounded-md border bg-white border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-200"/>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 rounded-md border bg-white border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-200"/>
                <div className="flex flex-wrap gap-2">
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                    <img src="" alt="" className="w-17 h-12 sm:w-20 sm:h-15 bg-gray-200 rounded-sm"/>
                </div>
            </div>
            <div className="flex flex-col gap-y-4  rounded-md border bg-white border-gray-200 p-4">
                <div className="flex flex-col gap-y-4 xsm:flex-row gap-x-3  items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3016515631048!2d6.9111932744735105!3d4.889070739996809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069db2f772f7a13%3A0x83d1d41ce96319cf!2sOmega%20lodge%20B!5e0!3m2!1sen!2sng!4v1753119065489!5m2!1sen!2sng"  className="w-full xsm:w-23 h-21 sm:w-27 sm:h-25 rounded-md shadow-sm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="flex flex-col gap-y-1">
                        <div className="flex text-gray-600 justify-between items-center text-[11px] font-medium sm:text-xs">
                            <p>ORGANIC</p>
                            <p>500mg</p>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold">Omega Lodge B, Odums Hotel Rd, Choba 50010, Rivers</h3>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Preferred Pickup Time:</p>
                            <p>4:00AM</p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 text-[11px] sm:text-xs">
                            <p className="text-gray-600">Date Reported:</p>
                            <p>4:00AM</p>
                        </div>
                    </div>
                </div>
                 <hr className="border border-gray-200"/>
                <div className="flex flex-wrap justify-center items-center gap-2 w-full h-12 sm:h-15 bg-gray-200">
                    <h3 className="text-xs sm:text-[13px]">No Image Uploaded</h3>
                </div>
            </div>
            
        </div>
    </>

}

export default Waste
