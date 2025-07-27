import { FiEdit2, FiPlus, FiUploadCloud } from "react-icons/fi"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { FaCheck, FaMinus } from "react-icons/fa6";
import { BsFilter } from "react-icons/bs"
import { IoMdArrowDown } from "react-icons/io"
import { RiDeleteBinLine } from "react-icons/ri"
import { FaCircle } from "react-icons/fa"
import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
    const [checkedRows, setCheckedRows] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    
    const toggleRowCheck = (rowId) => {
        setCheckedRows(prev => ({
            ...prev,
            [rowId]: !prev[rowId]
        }));
    };

    const navigate = useNavigate()
    
    const staffData = [
  {
    id: "NY09876",
    name: "John Smith",
    role: "Administrator",
    status: "Active",
    stat: "24 / 18",
    createdAt: "15 Mar 2023"
  },
  {
    id: "NY09877",
    name: "Sarah Johnson",
    role: "Manager",
    status: "Active",
    stat: "32 / 25",
    createdAt: "22 Feb 2023"
  },
  {
    id: "NY09878",
    name: "Michael Brown",
    role: "Supervisor",
    status: "Inactive",
    stat: "18 / 12",
    createdAt: "05 Jan 2023"
  },
  {
    id: "NY09879",
    name: "Emily Davis",
    role: "Technician",
    status: "Active",
    stat: "45 / 38",
    createdAt: "28 Mar 2023"
  },
  {
    id: "NY09880",
    name: "Robert Wilson",
    role: "Analyst",
    status: "Pending",
    stat: "12 / 8",
    createdAt: "10 Apr 2023"
  },
  {
    id: "NY09881",
    name: "Jennifer Lee",
    role: "Coordinator",
    status: "Active",
    stat: "29 / 22",
    createdAt: "03 Mar 2023"
  },
  {
    id: "NY09882",
    name: "David Miller",
    role: "Specialist",
    status: "Inactive",
    stat: "15 / 10",
    createdAt: "18 Feb 2023"
  },
  {
    id: "NY09883",
    name: "Jessica Taylor",
    role: "Administrator",
    status: "Active",
    stat: "38 / 30",
    createdAt: "25 Jan 2023"
  },
  {
    id: "NY09884",
    name: "Christopher Anderson",
    role: "Manager",
    status: "Pending",
    stat: "21 / 15",
    createdAt: "08 Apr 2023"
  },
  {
    id: "NY09885",
    name: "Amanda Martinez",
    role: "Technician",
    status: "Active",
    stat: "42 / 36",
    createdAt: "12 Mar 2023"
  }
];

    return (
        <>
            {/* {showDeleteModal && (
                <DeleteStaffModal
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={() => {
                        // handleDeleteItem();
                        setShowDeleteModal(false);
                    }}
                />
            )} */}
            
            <div className="adminStaffWrapper  rounded-lg  flex flex-col w-full">
                {/* Header Section */}
                <div className="adminStaffHeading flex justify-between flex-wrap  gap-2.5 items-start">
                    <div className="leftInventoryHeading flex flex-col gap-1">
                        <h2 className="text-base sm:text-lg font-medium flex items-center gap-2">
                            Staff List 
                            <span className="bg-[#E6F1FF] text-[#2584F8] text-xs font-medium px-2 py-0.5 rounded-full">24 staff</span>
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-[13px]">Keep track of staff and productivity ratings.</p>
                    </div>
                    
                    <div className="rightInventoryHeading flex gap-3">
                        <button className="border border-gray-300 bg-white text-gray-700 hover:text-black rounded-lg px-4 py-2 text-xs flex items-center gap-2">
                            <FiUploadCloud /> Import
                        </button>
                        <button 
                            className="border border-[#79DA11] bg-[#79DA11] text-white hover:bg-[#79da11dc] rounded-lg px-4 py-2 text-xs flex items-center gap-2"
                            onClick={() => navigate("new")}
                        >
                            <FiPlus /> Add Staff
                        </button>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="inventorySubHeading flex items-center justify-end py-3 flex-wrap gap-2.5">
                    <div className="inventoryTabWrapper border border-gray-300 rounded-lg flex">
                        <p className="text-black px-4 py-2.5 text-xs font-medium">View All</p>
                        <p className="border-x border-gray-300 text-gray-700 px-4 py-2.5 text-xs">Companies</p>
                        <p className="text-gray-700 px-4 py-2.5 text-xs">Users</p>
                    </div>

                </div>

                {/* Table Section */}
                <div className="relative overflow-x-auto mt-6">
                    <table className="w-full min-w-[800px]">
                        <thead className="text-gray-500">
                            <tr className="border-b border-gray-200 text-left">
                                <th scope="col" className="px-4.5 py-3.5 font-medium  text-xs">
                                    User
                                </th>
                                <th scope="col" className="px-4.5 py-3.5 font-medium  text-xs">
                                    Role
                                </th>
                                <th scope="col" className="px-4.5 py-3.5 font-medium  text-xs">
                                    Status
                                </th>
                                <th scope="col" className="px-4.5 py-3.5 font-medium text-xs">
                                    Reports / Picked Up No.
                                </th>
                                <th scope="col" className="px-4.5 py-3.5 font-medium text-xs">
                                    Created
                                </th>
                                <th scope="col" className="px-4.5 py-3.5 w-1"></th>
                                <th scope="col" className="px-4.5 py-3.5 w-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffData.map((user, index) => (
                                <tr key={index} className="bg-white border-b border-gray-200 cursor-pointer">
                                    <td 
                                        scope="row" 
                                        className="px-4.5 py-4 font-medium whitespace-nowrap text-gray-800"
                                        onClick={() => navigate("1")}
                                    >
                                        <div className="flex flex-col">
                                            <p className="text-[13px] sm:text-sm">{user.name} </p>
                                            <small className="text-[#9CA3AF] text-xs">ID: NY09876</small>
                                        </div>
                                    </td>
                                    
                                    <td className="px-4.5 py-4 text-gray-500 text-xs">
                                        {user.role}
                                    </td>
                                    
                                    <td className="px-4.5 py-4 text-gray-500 text-xs">
                                        {user.status}
                                    </td>
                                    <td className="px-4.5 py-4 text-gray-500 text-xs">
                                        {user.stat}
                                    </td>
                                    <td className="px-4.5 py-4 text-gray-500 text-xs">
                                        {user.createdAt}
                                    </td>
                                    <td 
                                        className="px-4.5 py-4 text-gray-500 cursor-pointer"
                                        onClick={() => setShowDeleteModal(true)}
                                    >
                                        <RiDeleteBinLine className="text-base"/>
                                    </td>
                                    <td 
                                        className="px-4.5 py-4 text-gray-500 cursor-pointer"
                                        onClick={() => navigate("edit/1")}
                                    >
                                        <FiEdit2 className="text-base"/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="inventoryPagination flex justify-between items-center px-6 py-3 flex-wrap gap-2.5 mt-3">
                    <p className="text-gray-700 text-xs">Page 1 of 4</p>
                    <div className="inventoryPaginationButtons flex gap-3">
                        <button className="border border-gray-300 rounded-lg px-3.5 py-2 text-xs">Previous</button>
                        <button className="border border-gray-300 rounded-lg px-3.5 py-2 text-xs">Next</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminUsers;