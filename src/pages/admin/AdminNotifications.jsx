import { NavLink } from "react-router-dom"
import { FaChevronDown, FaCircle } from "react-icons/fa6"

const AdminNotifications = () => {
    return (
        <div className="flex flex-col gap-[18px]">
            <div className="flex justify-between items-center w-full lg:w-full flex-wrap gap-y-3">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-[18px] xsm:text-[18px]  md:text-[25px] font-semibold sm:text-[22px] ">Notifications</h1>
                    <p className="text-xs sm:text-[13px] text-gray-600">You have 40 unread notifications</p>
                </div>
                <span className="text-primary text-xs  sm:text-sm font-[500] md:text-[13px]">Mark all as read</span>
            </div>
            <p className="mb-[3px] mt-2 text-[13px] sm:text-sm">Recent</p>

            <div className="flex flex-col lg:flex-row gap-[30px] items-start">
                <div className="flex flex-col gap-[16px] w-full lg:w-full">
                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Today's Schedule</h3>
                                <span className="flex gap-1 items-center text-gray-500 md:text-[12px] font-[400] text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 2m
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">Your schedule today is confirmed! Check Schedule Page for more details.</p>
                    </div>

                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Schedule Changed</h3>
                                <span className="flex gap-1 items-center text-gray-500 text-[12px] font-[400] md:text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 2m
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">Admin has rearranged your schedule for today. Go to Schedule page.</p>
                    </div>

                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Video Meeting</h3>
                                <span className="flex gap-1 items-center text-gray-500 text-[12px] font-[400] md:text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 2m
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">You have a video meeting coming up in 30mins with Mr Balla. </p>
                    </div>

                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Task Cancelled</h3>
                                <span className="flex gap-1 items-center text-gray-500 text-[12px] font-[400] md:text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 2m
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">General cleaning task has been cancelled for today due to the ongoing maintenance.</p>
                        <NavLink className="text-[#79DA11] text-[13px] font-[500] mt-[14px]">View Details</NavLink>
                    </div>

                    <p className="text-[13px] mt-2 sm:text-[13px] sm:text-sm">Earlier</p>

                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Supplies Incoming</h3>
                                <span className="flex gap-1 items-center text-gray-500 text-[12px] font-[400] md:text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 1hr
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">You request has been received and is being sorted.</p>
                    </div>

                    <div className="flex flex-col gap-[4px] p-[16px] border border-[#EAEAEA] rounded-[8px] w-full lg:w-full">
                        <div className="flex justify-between items-center flex-wrap gap-[10px]">
                            <div className="flex gap-[12px] items-center">
                                <h3 className="text-xs sm:text-sm font-[500] md:text-[13px]">Task Completed</h3>
                                <span className="flex gap-1 items-center text-gray-500 text-[12px] font-[400] md:text-[11px]">
                                    <FaCircle className="h-1 w-1 rounded-3xl"/> 1hr
                                </span>
                            </div>
                            <FaChevronDown className="text-gray-500 w-[13px]"/>
                        </div>
                        <p className="text-gray-500 text-[11px] sm:text-xs font-[400]">You request has been received and is being sorted.</p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default AdminNotifications