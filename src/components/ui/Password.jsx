import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";


const Password = () => {

    const [profileData, setProfileData] = useState({
            phone: "",
            bio: "",
            street_address: "",
            zip_code: "",
            city: "",
            state: "",
            country: "",
            bank_name: "",
            account_name: "",
            account_number: "",
            profile_pic: ""
        });

        const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevFilter) => ({
            ...prevFilter,
            [name]: value, 
        }));
    };
    
    return<>
        <form>
            {/* Password Section */}
            <div className="flex flex-col md:flex-row gap-8 py-8">
                <div className="w-full md:w-1/3">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">Password</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px]">
                        Manage your password here for enhanced security. Manage your password here for enhanced security.
                    </p>
                </div>
                <div className="w-full md:w-2/3 space-y-5">
                    <div className="w-full">
                        <label className="block text-xs sm:text-[13px] font-medium mb-1">Old Password</label>
                        <input 
                            type="password" 
                            placeholder="*******"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-xs sm:text-[13px] font-medium mb-1">New Password</label>
                        <input 
                            type="password" 
                            placeholder="*******"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-xs sm:text-[13px] font-medium mb-1">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder="*******"
                            className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Form Buttons */}
            <div className="flex justify-end gap-3 pt-6">
                <button className="text-primary bg-white border border-primary px-5 py-2 rounded text-xs sm:text-[13px] font-medium">
                    Cancel
                </button>
                <button className="bg-primary text-white border border-primary px-5 py-2 rounded text-xs sm:text-[13px] font-medium">
                    Save Changes
                </button>
            </div>
        </form>
    </>

}


export default Password