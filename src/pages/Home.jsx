

const Home = () => {

    return<>
        <div>
            <div className="HomeHeroSection h-[90vh] w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90  via-black/56 to-black/30 flex flex-col  h-[90vh] w-full px-8 sm:px-15 justify-center">

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

            <div></div>
        </div>
    </>

}

export default Home;