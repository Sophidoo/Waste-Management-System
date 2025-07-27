import { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Profile from "../../components/ui/profile";
import Password from "../../components/ui/Password";

const AdminSettings = () => {
    const [profile, setProfile] = useState(true);
    const [password, setPassword] = useState(false);
    const [business, setBusiness] = useState(false);
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

    // useEffect(() => {
    //     api.get("/user/personal-profile")
    //     .then(res => {
    //         console.log(res);
    //         setProfileData(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }, []);

    

    return (
        <div className="">
            {/* Settings Heading */}
            <div className="mb-6">
                <h2 className="text-lg md:text-xl font-semibold">Account Settings</h2>
            </div>

            {/* Tabs */}
            <div className="mb-6 w-fit">
                <div className="flex bg-gray-100 rounded-lg p-1 cursor-pointer">
                    <button 
                        className={`px-4 py-2 rounded-md text-xs sm:text-[13px] font-medium cursor-pointer ${profile ? 'bg-white shadow' : 'hover:bg-white'}`}
                        onClick={() => {
                            setProfile(true);
                            setBusiness(false);
                            setPassword(false);
                        }}
                    >
                        Profile
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-md text-xs sm:text-[13px] cursor-pointer font-medium ${password ? 'bg-white shadow' : 'hover:bg-white'}`}
                        onClick={() => {
                            setProfile(false);
                            setBusiness(false);
                            setPassword(true);
                        }}
                    >
                        Password
                    </button>
                </div>
            </div>

            {/* Form Wrapper */}
            <div className=" rounded-b-lg rounded-tr-lg ">
                {/* Profile Header */}
                <div className="flex flex-wrap justify-between items-start pb-6 mb-6 border-b border-gray-200">
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                        <img 
                            src={profileData.profile_pic} 
                            alt="Profile" 
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gray-300 object-cover"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base sm:text-lg font-semibold">John Doe</h3>
                            <p className="font-semibold text-gray-600 text-xs sm:text-[13px]">Registered Agent</p>
                            <p className="text-gray-600 text-xs sm:text-[13px]">Port Harcourt, Rivers State</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-5 py-1.5 rounded text-sm">
                        Delete Picture
                    </button>
                </div>

                {/* Profile Form */}
                {profile && (
                    <Profile/>
                )}


                {/* Password Form */}
                {password && (
                    <Password/>
                )}
            </div>
        </div>
    );
};

export default AdminSettings;