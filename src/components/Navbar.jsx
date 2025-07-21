import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import ReportWasteModal from './modals/ReportWasteModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Waste', href: '/waste' },
  ];

  return <>
  {showModal && <ReportWasteModal onClose={() => setShowModal(false)}/>}
    <nav className="bg-[#137D17] text-white shadow-sm sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex gap-x-10 flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              Waste .
            </a>
            <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (

                <NavLink
                    key={link.name}
                    to={link.href}
                    end
                    className={({ isActive }) =>
                        `text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200  ${
                        isActive ? 'text-white underline' : 'text-gray-300'
                    }`}
                >
                    {link.name}
                </NavLink>
                ))}
                <p className='text-gray-300 cursor-pointer hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200' onClick={() => setShowModal(true)}>Request Pickup</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex'>
            <button className='text-xs border-2 border-white px-4 py-1.5 font-medium cursor-pointer hover:bg-white hover:text-[#137D17] transition'>Dashboard</button>
          </div>
          

          {/* Mobile menu button */}
          <div className="md:hidden flex gap-x-3 items-center">
          <div>
            <button className='text-[11px] border-2 border-white px-4 py-1 font-medium cursor-pointer hover:bg-white hover:text-[#137D17] transition'>Dashboard</button>
          </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-medium  hover:text-[#137D17] hover:bg-gray-50 ${
                        isActive ? 'text-[#137D17]' : 'text-black'
                    }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <p className='text-black cursor-pointer hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200' onClick={() => setShowModal(true)}>Request Pickup</p>
          </div>
        </div>
      )}
    </nav>
  </>;
};

export default Navbar;