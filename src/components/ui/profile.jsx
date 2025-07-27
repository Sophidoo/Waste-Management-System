import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";


const Profile = () => {

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
            {/* Personal Information */}
            <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-gray-200">
                <div className="w-full md:w-1/3">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2">Personal Information</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px]">
                        Manage and update your personal details to keep your account secure and up to date.
                    </p>
                </div>
                <div className="w-full md:w-2/3 space-y-5">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">First Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your first name"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">Last Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your last name"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">Email Address</label>
                            <input 
                                type="text" 
                                placeholder="Enter your email address"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Enter your phone number" 
                                value={profileData.phone} 
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="block text-xs sm:text-[13px] font-medium mb-1">Brief Bio</label>
                        <textarea 
                            placeholder="Enter a brief bio" 
                            value={profileData.bio} 
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none resize-y"
                            rows="3"
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="flex flex-col md:flex-row gap-8 py-8 border-b border-gray-200">
                <div className="w-full md:w-1/3">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2">Profile Picture</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px]">
                        Update your company logo or profile picture. This logo may be displayed publicly
                    </p>
                </div>
                <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-5 items-center">
                    <div className="w-32 h-32 rounded-full bg-gray-300"></div>
                    <div className="border border-dashed border-gray-300 rounded p-5 text-center flex flex-col items-center gap-2">
                        <IoCloudUploadOutline className="text-xl" />
                        <p className="text-gray-600 text-xs sm:text-[13px]">
                            <span className="font-semibold underline">Click here to upload</span> or drag and drop
                            <br />SVG, PNG, JPG, or JPEG (max 800 x 400px)
                        </p>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row gap-8 py-8">
                <div className="w-full md:w-1/3">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-600 text-xs sm:text-[13px]">
                        Update your address to ensure your contact information is always accurate and up to date.
                    </p>
                </div>
                <div className="w-full md:w-2/3 space-y-5">
                    <div className="w-full">
                        <label className="block text-xs sm:text-[13px] font-medium mb-1">Street Address</label>
                        <input 
                            type="text" 
                            name="street_address" 
                            placeholder="Enter your street address" 
                            value={profileData.street_address} 
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">Zip Code</label>
                            <input 
                                type="text" 
                                name="zip_code" 
                                placeholder="Enter your zip code" 
                                value={profileData.zip_code} 
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">City</label>
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="Enter your city" 
                                value={profileData.city} 
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">State</label>
                            <select 
                                name="state" 
                                value={profileData.state} 
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            >
                                <option value="">Select your State</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block text-xs sm:text-[13px] font-medium mb-1">Country</label>
                            <input 
                                type="text" 
                                placeholder="Enter your state" 
                                name="country" 
                                value={profileData.country} 
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded text-xs sm:text-[13px] focus:border-primary focus:outline-none"
                            />
                        </div>
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


export default Profile