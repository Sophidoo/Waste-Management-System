
import pending from "../assets/icons/wall-clock.png"
import approved from "../assets/icons/quality.png"
import pickedUp from "../assets/icons/recycling-truck (1).png"

const Waste = () => {

    return <>
        <section className="flex flex-col gap-y-3 items-center pb-12 pt-20 sm:pt-25 px-4 sm:px-20 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Reported Waste</h1>
            <p className="text-xs sm:text-[13px] font-medium text-gray-600 w-full md:w-180 lg:w-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cum, impedit quos minima tenetur quis voluptatem itaque quibusdam esse est explicabo officiis ab nobis odit veniam. Eligendi vitae harum libero?</p>
        </section>
        {/* <hr className="mx-4 sm:mx-20 border border-gray-300"/> */}
        <div className="w-full pb-20 px-20 ">
            <div className="w-full p-10 bg-gray-100 rounded-lg flex flex-col gap-y-6">
                <div className="flex justify-between gap-x-4">
                    <div className="bg-white rounded hover:shadow-md  text-gray-700 border border-gray-200 cursor-pointer py-3 px-4 w-1/3 flex justify-between">
                        <p className="text-xs sm:text-sm font-medium">Pending</p>
                        <img src={pending} alt="" className="h-5 w-auto "/>
                    </div>
                    <div className="bg-white rounded hover:shadow-md text-gray-700 border border-gray-200 cursor-pointer py-3 px-4 w-1/3 flex justify-between">
                        <p className="text-xs sm:text-sm font-medium ">Approved</p>
                        <img src={approved} alt="" className="h-5 w-auto "/>
                    </div>
                    <div className="bg-white rounded hover:shadow-md text-gray-700 border border-gray-200 cursor-pointer py-3 px-4 w-1/3 flex justify-between">
                        <p className="text-xs sm:text-sm font-medium ">Picked Up</p>
                        <img src={pickedUp} alt="" className="h-5 w-auto "/>
                    </div>
                </div>

                <hr className="border border-gray-200" />

            </div>
        </div>
    </>

}

export default Waste