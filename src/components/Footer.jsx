import { NavLink } from "react-router-dom"
import email from "../assets/icons/email (1).png"
import call from "../assets/icons/phone-call.png"
import office from "../assets/icons/location.png"

const Footer = () => {

    return <>
        <footer className="countSection h-fit mt-3">
            <div className="px-4 sm:px-20 pt-20 flex flex-col items-center gap-y-10 bg-[#184336]/90">
                <div className="flex flex-col gap-y-3 text-center items-center text-white">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl">Waste</h1>
                    <p className="fontemedium text-xs sm:text-[13px] w-full md:w-[80%]">Waste affects everyone—but together, we can make a difference. Join our mission to promote responsible waste reporting, efficient pickups, and a cleaner environment for all.</p>
                </div>
                <hr className="border border-gray-400 w-full"/>
                <div className="text-white text-[13px] sm:text-sm font-medium flex gap-x-12 flex-wrap items-center gap-y-3 justify-center">
                    <NavLink>Home</NavLink>
                    <NavLink>Wastes</NavLink>
                    <NavLink>Request Pickup</NavLink>
                    <NavLink>Contact Us</NavLink>
                    <NavLink>Registered Companies</NavLink>
                    <NavLink>Terms</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                </div>
                <hr className="border border-gray-400 w-full"/>
                <div className="flex justify-between items-start flex-wrap gap-x-6 gap-y-6 max:xsm flex-col md:flex-row w-full text-white">
                    <div className="flex items-start gap-x-5">
                        <img src={email} alt="" className="h-6 sm:h-8 w-auto"/>
                        <div className="flex flex-col gap-y-2">
                            <h2 className=" text-xl sm:text-2xl  ">Write Us</h2>
                            <p className="text-xs sm:text-[13px]">info@waste.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-x-5">
                        <img src={office} alt=""  className="h-6 sm:h-8 w-auto"/>
                        <div className="flex flex-col gap-y-2">
                            <h2 className=" text-xl sm:text-2xl  ">Office</h2>
                            <p className="text-xs sm:text-[13px]">Omega Lodge C, First Mechanic,  East west-road Port Harcourt</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-x-5">
                        <img src={call} alt=""  className="h-6 sm:h-8 w-auto"/>
                        <div className="flex flex-col gap-y-2">
                            <h2 className=" text-xl sm:text-2xl  ">Call Us</h2>
                            <p className="text-xs sm:text-[13px]">+234 000 000 0000</p>
                        </div>
                    </div>
                </div>

                <hr className="border border-gray-500 w-full"/>
                <div className="flex justify-between px-4 sm:px-8 py-8 text-center text-white flex-wrap gap-y-2 -mt-10">
                    <p className="text-xs sm:text-[13px] ">
                        All Rights Reserved &copy; 2025 Waste Management and Information System
                    </p>
                </div>
            </div>
        </footer>
    </>

}

export default Footer;
