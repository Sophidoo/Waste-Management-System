import { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";


const ReportWasteModal = ({ onClose, onConfirm }) => {

    const modalRef = useRef();
    const [pickupAddress, setPickupAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGeolocationClick = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success callback
        const { latitude, longitude } = position.coords;
        
        // Optionally, you can reverse geocode to get an address
        fetchAddressFromCoords(latitude, longitude);
        
        setIsLoading(false);
      },
      (err) => {
        // Error callback
        setError("Unable to retrieve your location");
        setIsLoading(false);
        console.error(err);
      }
    );
  };

  const fetchAddressFromCoords = async (lat, lng) => {
    try {
      // You would typically use a geocoding service here
      // Example using Nominatim (OpenStreetMap)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      
      if (data.display_name) {
        setPickupAddress(data.display_name);
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      setPickupAddress(`${lat}, ${lng}`); // Fallback to just showing coordinates
    }
  };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return<>
    <div className="fixed inset-0 bg-[#344054B2] bg-opacity-50 flex items-center justify-center z-70 px-[3%]">
        <div ref={modalRef} onClick={(e) => e.stopPropagation()} className="h-fit overflow-y-auto bg-white rounded-md w-full sm:w-[612px]">
            <form className="max-h-[95vh] py-3 px-3 xsm:py-6 xsm:px-7 flex flex-col gap-5 w-full rounded-md ">
                <div className="flex justify-end w-fit" onClick={onClose}>
                    <IoClose className="text-lg text-gray-500 cursor-pointer hover:text-gray-700"/>
                </div>

                <div className="flex flex-col gap-y-1 items-center text-center">
                    <h3 className="text-base font-semibold sm:text-xl text-[#3C366B]">Request Waste Pickup</h3>
                    <p className="text-xs sm:text-[13px] text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quisquam?</p>
                </div>


                <div className="flex flex-col gap-0.5">
                    <label htmlFor="" className="text-[13px]">Type Of Waste</label>
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Select the type of waste</p>
                    <select name="" id="" className="py-2.5 px-3 border border-gray-300 rounded-md text-[13px]">
                        <option value="">Select One</option>
                    </select>
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="" className="text-[13px]">Pickup Address</label>
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Input the pickup addrerss or <small className="text-[11px] sm:text-xs text-blue-500 font-semibold" onClick={handleGeolocationClick}>Click here</small> to use geolocation</p>
                    <input type="text" name="" id="" className="py-2.5 px-3 border border-gray-300 rounded-md text-[13px]" value={pickupAddress}
        onChange={(e) => setPickupAddress(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="" className="text-[13px]">Preferred Time Slot</label>
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Input your preferred time slot to pick up the waste</p>
                    <input type="time" name="" id="" className="py-2.5 px-3 border border-gray-300 rounded-md text-[13px]"/>
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="" className="text-[13px]">Quantity / Approximate Weight</label>
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Input the quantity or approximate weight of the waste and ensure to add the measurement unit</p>
                    <input type="text" name="" id="" className="py-2.5 px-3 border border-gray-300 rounded-md text-[13px]"/>
                </div>
                <div className="flex flex-col gap-0.5">
                    <label htmlFor="" className="text-[13px]">Upload Photos</label>
                    <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Upload a maximum of 4 photos</p>
                    <input type="file" name="" id="" className="py-2.5 px-3 border border-gray-300 rounded-md text-[13px]"/>
                </div>
                

                <div className="flex justify-end space-x-3 bg-gray-50 pb-10  pt-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs cursor-pointer sm:text-sm focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="px-4 py-2 bg-[#79DA11] text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 cursor-pointer text-xs sm:text-sm"
                    >
                        Submit Report
                    </button>
                </div>
            </form>
        </div>
    </div>

    </>

}

export default ReportWasteModal