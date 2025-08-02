import { useState } from 'react';
import { FiChevronUp, FiChevronDown, FiFilter, FiSearch, FiEdit2, FiTrash2, FiEye, FiMapPin } from 'react-icons/fi';

const MiniashboardTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'reportedDate', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const wasteData = [
    {
      id: 'WM-1001',
      address: '123 Green Valley Rd, Eco City',
      wasteType: 'Plastic & Paper',
      status: 'Pending',
      reportedBy: 'John Doe (Resident)',
      reportedDate: '2023-06-15',
      pickupTime: 'Today, 2:00-4:00 PM',
      assignedCompany: '',
      images: 2,
      location: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'WM-1002',
      address: '456 Recycling Ave, Green Town',
      wasteType: 'Electronic Waste',
      status: 'Approved',
      reportedBy: 'Sarah Smith (Business)',
      reportedDate: '2023-06-14',
      pickupTime: 'Tomorrow, 9:00-11:00 AM',
      assignedCompany: 'Green Waste Solutions',
      images: 1,
      location: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 'WM-1001',
      address: '123 Green Valley Rd, Eco City',
      wasteType: 'Plastic & Paper',
      status: 'Pending',
      reportedBy: 'John Doe (Resident)',
      reportedDate: '2023-06-15',
      pickupTime: 'Today, 2:00-4:00 PM',
      assignedCompany: '',
      images: 2,
      location: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'WM-1002',
      address: '456 Recycling Ave, Green Town',
      wasteType: 'Electronic Waste',
      status: 'Approved',
      reportedBy: 'Sarah Smith (Business)',
      reportedDate: '2023-06-14',
      pickupTime: 'Tomorrow, 9:00-11:00 AM',
      assignedCompany: 'Green Waste Solutions',
      images: 1,
      location: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 'WM-1001',
      address: '123 Green Valley Rd, Eco City',
      wasteType: 'Plastic & Paper',
      status: 'Pending',
      reportedBy: 'John Doe (Resident)',
      reportedDate: '2023-06-15',
      pickupTime: 'Today, 2:00-4:00 PM',
      assignedCompany: '',
      images: 2,
      location: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'WM-1002',
      address: '456 Recycling Ave, Green Town',
      wasteType: 'Electronic Waste',
      status: 'Approved',
      reportedBy: 'Sarah Smith (Business)',
      reportedDate: '2023-06-14',
      pickupTime: 'Tomorrow, 9:00-11:00 AM',
      assignedCompany: 'Green Waste Solutions',
      images: 1,
      location: { lat: 34.0522, lng: -118.2437 }
    },
    // Add more sample data...
  ];

  // Filter and sort data
  const filteredData = wasteData.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentItems = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className=" overflow-hidden">

      {/* Table */}
      <div className="overflow-x-auto wasteTable">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
                <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('wasteType')}
                >
                    <div className="flex items-center">
                    Waste Type
                    {sortConfig.key === 'wasteType' && (
                        sortConfig.direction === 'asc' ? 
                        <FiChevronUp className="ml-1" /> : 
                        <FiChevronDown className="ml-1" />
                    )}
                    </div>
                </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('address')}
              >
                <div className="flex items-center">
                  Location
                  {sortConfig.key === 'address' && (
                    sortConfig.direction === 'asc' ? 
                    <FiChevronUp className="ml-1" /> : 
                    <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('status')}
              >
                <div className="flex items-center">
                  Status
                  {sortConfig.key === 'status' && (
                    sortConfig.direction === 'asc' ? 
                    <FiChevronUp className="ml-1" /> : 
                    <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[10px] sm:text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    {item.wasteType}
                  </td>
                  <td className="px-6 py-4  text-xs sm:text-[13px] text-gray-500 max-w-100">
                    <div>
                        <div className="flex items-center">
                            <FiMapPin className="mr-1 text-gray-400" />
                            {item.address}
                        </div> 
                        <p className='text-[11px] sm:text-xs mt-1'>Lat: 45455542, Long: t5245324</p>     
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-[10px] font-medium rounded-full ${
                      item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      item.status === 'Approved' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-[13px] text-gray-500">
                    <div className="flex space-x-4">
                      <button className="bg-primary hover:bg-green-600 transition text-white text-[9px] sm:text-[10px] px-2 py-1 rounded cursor-pointer">
                        Approve
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-xs sm:text-[13px] text-gray-500">
                  No waste collection requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-xs sm:text-[13px] text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, sortedData.length)}
              </span>{' '}
              of <span className="font-medium">{sortedData.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-xs sm:text-[13px] font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative inline-flex items-center px-4 py-2 border text-xs sm:text-[13px] font-medium ${
                    currentPage === page
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-xs sm:text-[13px] font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniashboardTable;