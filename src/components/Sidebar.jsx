
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineBell, HiOutlineChartBar, HiOutlineChartSquareBar, HiOutlineCursorClick, HiOutlineLogout, HiOutlineMail, HiOutlineMenuAlt2, HiOutlineUser } from "react-icons/hi";
import { BiPrinter, BiReceipt } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

const AdminSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [notification, setNotification] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col">
            {/* Top Navigation Bar */}
            <div className="bg-white flex items-center px-3 sm:px-10 py-4 gap-[2%] shadow-[0px_1px_0px_#12203B17] fixed left-0 right-0 top-0 z-40">
                <div className="w-[19.4%]">
                    {windowWidth < 1300 ? (
                        <HiOutlineMenuAlt2 
                            className="text-2xl cursor-pointer" 
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                    ) : (
                        <a href="/" className="text-2xl font-bold text-primary">
                            Waste .
                        </a>
                    )}
                </div>

                <div className="w-[83%] flex justify-end xsm:justify-between items-center">
                    <div className="hidden xsm:flex border border-[#E4E4E7] rounded-[10px] p-[10px_16px]  gap-[10px] font-['Plus_Jakarta_Sans'] items-center w-[70%]">
                        <IoIosSearch className="text-[#A1A1AA] text-[15px]" />
                        <input type="text" placeholder="Type to search" className="border-0 outline-none bg-transparent text-[12px]" />
                    </div>

                    <div className="flex items-center gap-7">
                        
                        <div className="relative">
                            <HiOutlineBell 
                                className="text-[#3F3F46] text-xl cursor-pointer" 
                                onClick={() => setNotification(!notification)}
                            />
                            
                            {notification && (
                                <div className="absolute right-[-90px] top-10 w-[408px] bg-white drop-shadow-gray-200 drop-shadow-2xl border border-gray-200 flex flex-col gap-3 rounded-xl p-4 z-50">
                                    <h3 className="text-black text-base font-semibold flex justify-between items-center">
                                        Your recent notifications 
                                    </h3>
                                    
                                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col gap-1">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-black text-sm flex items-center gap-3">
                                                Today's Schedule 
                                                <span className="text-gray-500 text-xs font-normal flex items-center gap-1">
                                                    <FaCircle className="text-[3px]" /> 2m
                                                </span>
                                            </h4>
                                            
                                        </div>
                                        <p className="text-gray-500 text-xs">
                                            Your schedule today is confirmed! Check Schedule Page for more details.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col gap-1">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-black text-sm flex items-center gap-3">
                                                Schedule Changed 
                                                <span className="text-gray-500 text-xs font-normal flex items-center gap-1">
                                                    <FaCircle className="text-[3px]" /> 2m
                                                </span>
                                            </h4>
                                            
                                        </div>
                                        <p className="text-gray-500 text-xs">
                                            Admin has rearranged your schedule for today. Go to Schedule page.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col gap-1">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-black text-sm flex items-center gap-3">
                                                Video Meeting 
                                                <span className="text-gray-500 text-xs font-normal flex items-center gap-1">
                                                    <FaCircle className="text-[3px]" /> 1hr
                                                </span>
                                            </h4>
                                            
                                        </div>
                                        <p className="text-gray-500 text-xs">
                                            You have a video meeting coming up in 30mins with Emmanuel Lekan
                                        </p>
                                    </div>
                                    
                                    <button
                                        className="bg-primary text-white text-sm rounded-full py-3 hover:bg-green-400" 
                                        onClick={() => navigate("/admin/notifications")}
                                    >
                                        23 more unread notifications
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <img 
                            src="" 
                            alt="Profile" 
                            className="w-9 h-9 rounded-full object-cover"
                        />
                        
                        
                    </div>
                </div>
            </div>
             
            {/* Sidebar */}
            {(windowWidth >= 1300 || showSidebar) && (
                <div className="fixed top-0 h-screen w-[70.4%] xl:w-[19.4%] bg-white border-r border-r-gray-200 flex flex-col gap-8 pl-11 pt-4 z-30">
                    {windowWidth < 1300 && (
                        <AiOutlineClose 
                            className="absolute top-5 right-4 cursor-pointer hover:text-red-500" 
                            onClick={() => setShowSidebar(false)}
                        />
                    )}
                    
                    <div className="pb-6">
                        <a href="/" className="text-2xl font-bold text-primary">
                        Waste .
                        </a>
                    </div>
                    
                    
                    <NavLink
                        to={"/admin"}
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                        }
                    >
                        <HiOutlineHome className="text-lg" />
                        Overview
                    </NavLink>
                    
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-7">
                            <small className="text-[#A1A1AA] text-xs tracking-wider">ADMINISTRATION</small>
                            
                            <NavLink
                                to={"/admin/waste"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                                }
                            >
                                <IoTrashBinOutline className="text-lg" />
                                Waste
                            </NavLink>
                            
                            
                            <NavLink
                                to={"/admin/users"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                                }
                            >
                                <HiOutlineUser className="text-lg" />
                                Users
                            </NavLink>
                            
                            <NavLink
                                to={"/admin/reports"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                                }
                            >
                                <HiOutlineChartSquareBar className="text-lg" />
                                Notifications
                            </NavLink>
                                
                            <NavLink
                                to={"/admin/settings"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                                }
                            >
                                <TbSettings className="text-lg" />
                                Settings
                            </NavLink>
                            
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 text-[13px] font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-500  '}`
                                }
                            >
                                <HiOutlineLogout className="text-lg" />
                                Logout
                            </NavLink>
                            
                        </div>
                        
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default AdminSidebar;