
import waste from "../assets/icons/garbage.png"
import schedule from "../assets/icons/project.png"
import pickup from "../assets/icons/recycling-truck.png"
import reporting from "../assets/icons/checklist.png"
import onborading from "../assets/icons/onboarding.png"
import category from "../assets/icons/recycle-bin.png"
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReportWasteModal from "../components/modals/ReportWasteModal"


const Home = () => {
    const [step, setStep] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()


    const handleStep = (num) => {
        setStep(num)
    }

    return<>
        {showModal && <ReportWasteModal onClose={() => setShowModal(false)}/>}
        <div>
            <div className="HomeHeroSection h-[85vh] xsm:h-[90vh] w-full relative  max-xsm:-mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80  via-black/50 to-black/0 flex flex-col h-[85vh] xsm:h-[90vh] w-full px-8 sm:px-15 justify-center ">

                    <div className="w-full sm:w-[80%] lg:w-[60%] xsm:-mt-10 xl:w-[43%] flex flex-col gap-y-7  ">
                        <div className="relative  flex flex-col gap-y-3 pl-4 sm:pl-8">
                            <div className="absolute w-10 h-10 sm:w-15 sm:h-15 border-l-2 border-b-2 -bottom-4.5 border-l-white border-b-white border-opacity-100 -left-1"></div>
                            <div className="absolute w-10 h-10 sm:w-15 sm:h-15 border-l-2 border-t-2 -top-2.5 border-l-white border-t-white border-opacity-100 -left-1"></div>
                            <h1 className="leading-tight text-xl xs:text-2xl xsm:text-4xl  font-bold  text-white w-full">
                                Sustainable Solutions  for a Cleaner Tomorrow
                            </h1>
                            <p className="text-gray-200 xsm:text-gray-300 text-[13px] xsm:text-sm lg:text-[15px]">Join us in building a cleaner, greener future. Our platform makes it easy to report, manage, and reduce waste in your community—one pickup at a time.</p>
                        </div>
                        <div className="flex mt-10 sm:mt-15 gap-x-3 cursor-pointer">
                            <button className="py-2 px-8 xsm:px-10 text-xs lg:text-sm font-medium bg-[#ce9417] text-white" onClick={() => setShowModal(true)}>Report Waste</button>
                            <button  className="py-2 px-8 xsm:px-10 text-xs lg:text-sm font-medium bg-transparent border-2 border-white  text-white" onClick={() => navigate("/waste")}>View Waste</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full  justify-between px-4 xl:px-40  -mt-13 relative z-10 ">
                <div className="bg-white  shadow-sm rounded flex flex-col md:flex-row px-2 sm:px-4">
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={waste} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm ">Report Waste</div>
                            <p className="font-medium text-gray-600 text-[11px] ">Easily report waste dumps in your area and get prompt action from registered waste companies.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={schedule} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm ">Schedule Pickup</div>
                            <p className="font-medium text-gray-600 text-[11px] ">Arrange convenient pickup times for your household or business waste with just a few clicks.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={pickup} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm ">Pick Up Waste</div>
                            <p className="font-medium text-gray-600 text-[11px] ">Registered companies can view and respond to waste pickup requests in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ABOUT US */}
        <section className="px-6 sm:px-20 flex flex-col gap-y-7 py-25">
            <h2 className="text-lg md:text-xl  w-full sm:w-[600px] font-bold">Our mission is to simplify waste management and promote sustainable living for everyone.</h2>

            <div className="flex flex-col lg:flex-row gap-x-10 sm:gap-x-20 items-center gap-y-4">
                <img src="" alt="" className="w-full lg:w-1/2 h-60 xsm:h-70 sm:h-90 bg-gray-300"/>

                <div className="flex flex-col gap-y-5 w-full lg:w-1/2 ">
                    <p className="text-[13px] leading-loose font-medium text-gray-600">We believe that everyone has a role to play in keeping our environment clean. Our platform empowers individuals, communities, and companies to take control of their waste by making the process transparent, traceable, and efficient.</p>

                    <div className="flex flex-col gap-y-2">
                        <div className="text-[13px] sm:text-sm font-medium flex justify-between items-center">
                            <p>Picked Up Waste</p>
                            <p>77%</p>
                        </div>
                        
                        <div className="h-1 bg-gray-200 rounded-full w-full">
                            <div className="h-1 bg-primary rounded-full w-[70%]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-[13px] sm:text-sm font-medium flex justify-between items-center">
                            <p>Waste Services</p>
                            <p>77%</p>
                        </div>
                        
                        <div className="h-1 bg-gray-200 rounded-full w-full">
                            <div className="h-1 bg-primary rounded-full w-[70%]"></div>
                        </div>
                    </div>

                    <ul className="ml-4 list-disc text-[13px]  text-gray-600 font-medium leading-loose">
                        <li> Ensures accountability in waste reporting and pickup.</li>
                        <li>Connects residents with verified waste management companies.</li>
                        <li>Tracks progress and impact in real-time.</li>
                        <li>Encourages community participation in sustainability.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SERVICES */}

        <section className="flex items-start justify-between gap-x-6 sm:py-10 flex-col lg:flex-row pb-25 px-4 lg:px-20">

            <div className="w-full  flex flex-col items-end">
                <div className="flex flex-col md:flex-row justify-end">
                    <div className="flex flex-col gap-y-2  md:w-1/3  pr-6 max-md:pb-10">
                        <h1 className="text-xl xsm:text-2xl lg:text-4xl font-semibold">Waste Services</h1>
                        <p className="text-gray-600 text-[11px] sm:text-[13px] leading-loose"Our platform provides efficient, eco-friendly waste management services tailored to meet residential, commercial, and industrial needs. Whether it's pickup, scheduling, or categorization—we simplify the entire process for a cleaner environment.</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={reporting} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Reporting</h3>
                        <p className="text-xs  text-gray-600 leading-loose font-medium">Users can quickly report waste in their area, helping to create a cleaner environment through transparency and collaboration.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-white">
                        <div className="w-full">
                            <img src={schedule} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Scheduling</h3>
                        <p className="text-xs  text-gray-600 leading-loose font-medium">Schedule waste pickups at your convenience. Our system ensures your requests are fulfilled on time by verified companies.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-primary/10 rounded-full mt-8"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={pickup} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Collection</h3>
                        <p className="text-xs  text-gray-600 leading-loose font-medium">Companies get notified of new pickup requests, view them by proximity, and respond with efficiency and professionalism.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-white">
                        <div className="w-full">
                            <img src={onborading} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Company Onboarding</h3>
                        <p className="text-xs  text-gray-600 leading-loose font-medium">Waste companies can register to join our platform, manage requests, and contribute to community sanitation efforts.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-primary/10 rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={category} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Category</h3>
                        <p className="text-xs  text-gray-600 leading-loose font-medium">View and understand different waste types—from recyclables to hazardous—so they’re handled appropriately.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                </div>

            </div>  
        </section>

        {/* STATISTICS */}

        <section className="countSection h-fit mt-45 md:mt-55">

            <div className="bg-[#184336]/90 px-4 sm:px-20 pb-25 flex flex-col gap-y-10 md:gap-y-20">
                <div className="flex justify-between items-end gap-x-10 gap-y-10 flex-col-reverse md:flex-row">
                    <div className="flex flex-col gap-y-10 items-start w-full md:w-1/2 max-md:pt-0 max-lg:pt-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-white">Transforming Waste Management Together</h1>
                        <button className="text-[11px] sm:text-xs py-2 px-6 bg-amber-500 text-white cursor-pointer" onClick={() => setShowModal(true)}>Report Waste</button>
                    </div>
                    <img src="" alt=""  className="w-full md:w-1/2 h-60 xsm:h-80 lg:h-100 bg-gray-600 -mt-35"/>
                </div>

                <div className="flex justify-between gap-x-2 gap-y-3 flex-wrap wrap items-center">
                    <div className="flex flex-col gap-y-1 items-center">
                        <h1  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">2K</h1>
                        <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-300 ">Registered Companies</p>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">150</h1>
                        <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-300 ">Picked Up Waste</p>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">170</h1>
                        <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-300 ">Reported Waste</p>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">30</h1>
                        <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-300 ">Satisfied Customers</p>
                    </div>
                </div>
            </div>

        </section>


        {/* HOW IT WORKS */}
        <section className="flex gap-x-30 items-center gap-y-10 px-4 md:px-20 flex-col lg:flex-row py-25">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-3 ">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-2xl m:text-3xl lg:text-4xl font-semibold">How it Works</h1>
                    <p className="text-xs sm:text-sm text-gray-600 leading-loose">Our process is simple and designed for impact. Whether you're a resident or a service provider, our step-by-step system makes waste management effortless and effective.</p>
                </div>

                <div className="w-full mt-4 flex flex-col gap-y-5">
                    <hr className="border border-gray-200"/>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div className="flex justify-between items-center" onClick={() => handleStep(1)}>
                            <h1 className="text-sm  font-semibold">Step 1: Register with us </h1>
                            <FaChevronDown className="h-3 w-auto cursor-pointer hover:text-primary"/>
                        </div>
                        {
                            step === 1 && <p className="text-xs  text-gray-500 font-medium leading-loose">Register an account with us by clicking on the register button and providing your details.</p>
                        }
                    </div>

                    <hr className="border border-gray-200"/>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div className="flex justify-between items-center" onClick={() => handleStep(2)}>
                            <h1 className="text-sm  font-semibold">Step 2: Report a waste</h1>
                            <FaChevronDown className="h-3 w-auto cursor-pointer hover:text-primary"/>
                        </div>
                        {
                            step === 2 && <p className="text-xs  text-gray-500 font-medium leading-loose">After registration, you can then click on report waste to report any waste you encounter.</p>
                        }
                    </div>
                    <hr className="border border-gray-200"/>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div className="flex justify-between items-center" onClick={() => handleStep(3)}>
                            <h1 className="text-sm  font-semibold">Step 3: Track your reported waste</h1>
                            <FaChevronDown className="h-3 w-auto cursor-pointer hover:text-primary"/>
                        </div>
                        {
                            step === 3 && <p className="text-xs  text-gray-500 font-medium leading-loose">Go to your dashboard to view wastes you've reported and the status of the waste, and the company that picked it up.</p>
                        }
                    </div>
                    <hr className="border border-gray-200"/>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div className="flex justify-between items-center" onClick={() => handleStep(4)}>
                            <h1 className="text-sm  font-semibold">Step 4: Pick up waste</h1>
                            <FaChevronDown className="h-3 w-auto cursor-pointer hover:text-primary"/>
                        </div>
                        {
                            step === 4 && <p className="text-xs  text-gray-500 font-medium leading-loose">For registered companies with us, after registering, go to the dashboard to view all posted waste close to your area, and approve for pickup.</p>
                        }
                    </div>
                </div>
                    
            </div>
            <div className="w-full lg:w-1/2 bg-gray-200 h-70 xsm:h-100">
                
            </div>
        </section>

        
    </>

}

export default Home;
