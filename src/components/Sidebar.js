import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaTruck, FaClipboardList, FaPlus, FaTruckLoading, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static z-10 w-48 bg-white text-gray-900 transition-transform duration-300 ease-in-out`}
      >

      {/* Sidebar Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-4 text-sm">
          <li>
            <Link to="/home" onClick={toggleSidebar} className="flex items-center space-x-2 mt-14 md:mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaHome className="text-sm" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/admin" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaUsers className="text-sm" />
              <span>Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/createstaff" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaUsers className="text-sm" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/newuser" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create User</span>
            </Link>
          </li>
          <li>
            <Link to="/vehicles" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaTruck className="text-sm" />
              <span>Vehicles</span>
            </Link>
          </li>
          <li>
            <Link to="/newvehicle" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Vehicle</span>
            </Link>
          </li>
          <li>
            <Link to="/drivers" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaTruckLoading className="text-sm" />
              <span>Drivers</span>
            </Link>
          </li>
          <li>
            <Link to="/newdrivers" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Driver</span>
            </Link>
          </li>
          <li>
            <Link to="/orderbydriver" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Driver's Order</span>
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/neworder" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Order</span>
            </Link>
          </li>
          <li>
            <Link to="/orderforpickup" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Order for Pick Up</span>
            </Link>
          </li>
          <li>
            <Link to="/dispatch" onClick={toggleSidebar} className="flex items-center space-x-2 mt-6 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Dispatch</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer Area in Sidebar */}
     
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
