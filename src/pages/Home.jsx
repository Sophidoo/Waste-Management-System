import { FaArrowRight } from "react-icons/fa"
import waste from "../assets/icons/garbage.png"
import schedule from "../assets/icons/project.png"
import pickup from "../assets/icons/recycling-truck.png"
import reporting from "../assets/icons/checklist.png"
import onborading from "../assets/icons/onboarding.png"
import category from "../assets/icons/recycle-bin.png"
import { FaArrowRightLong } from "react-icons/fa6"

const Home = () => {

    return<>
        <div>
            <div className="HomeHeroSection h-[90vh] w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80  via-black/50 to-black/0 flex flex-col  h-[90vh] w-full px-8 sm:px-15 justify-center">

                    <div className="w-full sm:w-[80%] lg:w-[60%] xl:w-[43%] flex flex-col gap-y-7  ">
                        <div className="relative  flex flex-col gap-y-3 pl-4 sm:pl-8">
                            <div className="absolute w-10 h-10 sm:w-15 sm:h-15 border-l-2 border-b-2 -bottom-4.5 border-l-white border-b-white border-opacity-100 -left-1"></div>
                            <div className="absolute w-10 h-10 sm:w-15 sm:h-15 border-l-2 border-t-2 -top-2.5 border-l-white border-t-white border-opacity-100 -left-1"></div>
                            <h1 className="leading-tight text-2xl xs:text-[26px] xsm:text-4xl lg:text-5xl font-bold  text-white w-full">
                                Sustainable Solutions  for a Cleaner Tomorrow
                            </h1>
                            <p className="text-gray-200 xsm:text-gray-300 text-[13px] xsm:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit sequi cum, eaque, ratione est amet adipisci ad ducimus, quas esse deserunt dolor facere accusamus laboriosam. Consequuntur culpa asperiores assumenda!</p>
                        </div>
                        <div className="flex mt-10 sm:mt-15 gap-x-3 cursor-pointer">
                            <button className="py-2 px-8 xsm:px-10 text-xs lg:text-sm font-medium bg-[#ce9417] text-white">Report Waste</button>
                            <button  className="py-2 px-8 xsm:px-10 text-xs lg:text-sm font-medium bg-transparent border-2 border-white  text-white">About Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full  justify-between px-4 xl:px-40  -mt-13 relative z-10 ">
                <div className="bg-white  shadow-sm rounded flex flex-col md:flex-row px-2 sm:px-4">
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={waste} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm sm:text-base">Report Waste</div>
                            <p className="font-medium text-gray-600 text-xs sm:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum esse cumque aliquam.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={schedule} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm sm:text-base">Schedule Pickup</div>
                            <p className="font-medium text-gray-600 text-xs sm:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum esse cumque aliquam.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center p-4">
                        <img src={pickup} alt="" className="h-10 sm:h-15 w-auto"/>
                        <div className="flex flex-col gap-y-1">
                            <div className="font-semibold text-sm sm:text-base">Pick Up Waste</div>
                            <p className="font-medium text-gray-600 text-xs sm:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum esse cumque aliquam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="px-6 sm:px-20 flex flex-col gap-y-7 py-25">
            <h2 className="text-lg md:text-xl lg:text-2xl w-full sm:w-[600px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit explicabo et quos dolorum sapiente?</h2>

            <div className="flex flex-col lg:flex-row gap-x-10 sm:gap-x-20 items-center gap-y-4">
                <img src="" alt="" className="w-full lg:w-1/2 h-60 xsm:h-70 sm:h-90 bg-gray-300"/>

                <div className="flex flex-col gap-y-5 w-full lg:w-1/2 ">
                    <p className="text-[13px] sm:text-sm leading-loose font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, pariatur nam quod repellendus porro architecto! Nam commodi fugit, a nesciunt optio tenetur veniam at adipisci! Esse, porro quo? Itaque molestiae provident aut omnis repudiandae ipsa obcaecati, modi dicta esse quas beatae voluptas ab autem id ipsum suscipit rerum iste. Quam!</p>

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

                    <ul className="ml-4 list-disc text-[13px] sm:text-sm text-gray-600 font-medium leading-loose">
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="flex items-start justify-between gap-x-6 sm:py-10 flex-col lg:flex-row pb-25 px-4 lg:px-20">

            <div className="w-full  flex flex-col items-end">
                <div className="flex flex-col md:flex-row justify-end">
                    <div className="flex flex-col gap-y-2  md:w-1/3  pr-6 max-md:pb-10">
                        <h1 className="text-xl xsm:text-2xl lg:text-4xl font-semibold">Waste Services</h1>
                        <p className="text-gray-600 text-xs sm:text-[13px] leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos iusto nisi fuga iste quidem, consectetur explicabo unde blanditiis at?</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={reporting} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Reporting</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem id, numquam vero velit perferendis. Ullam in sed omnis, animi magnam debitis? Neque, explicabo suscipit.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-white">
                        <div className="w-full">
                            <img src={schedule} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Scheduling</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem id, numquam vero velit perferendis. Ullam in sed omnis, animi magnam debitis? Neque, explicabo suscipit.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-primary/10 rounded-full mt-8"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={pickup} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Collection</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem id, numquam vero velit perferendis. Ullam in sed omnis, animi magnam debitis? Neque, explicabo suscipit.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-white">
                        <div className="w-full">
                            <img src={onborading} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Company Onboarding</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem id, numquam vero velit perferendis. Ullam in sed omnis, animi magnam debitis? Neque, explicabo suscipit.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-primary/10 rounded-full mt-10"/>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-y-2 px-4 xsm:px-6 py-4 rounded items-end bg-primary/10">
                        <div className="w-full">
                            <img src={category} alt="" className="h-10 sm:h-13 w-auto mb-4"/>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold w-full">Waste Category</h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem id, numquam vero velit perferendis. Ullam in sed omnis, animi magnam debitis? Neque, explicabo suscipit.</p>
                        <FaArrowRightLong className="text-primary p-2 text-4xl bg-white rounded-full mt-10"/>
                    </div>
                </div>

            </div>  
        </section>

        <section className="countSection h-fit mt-45 md:mt-55">

            <div className="bg-[#184336]/90 px-4 sm:px-20 pb-25 flex flex-col gap-y-10 md:gap-y-20">
                <div className="flex justify-between items-end gap-x-10 gap-y-10 flex-col-reverse md:flex-row">
                    <div className="flex flex-col gap-y-10 items-start w-full md:w-1/2 max-md:pt-0 max-lg:pt-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-white">Transforming Waste Management Together</h1>
                        <button className="text-[11px] sm:text-xs py-2 px-6 bg-amber-500 text-white">Report Waste</button>
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
    </>

}

export default Home;