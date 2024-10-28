import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaTruck, FaClipboardList, FaPlus, FaTruckLoading } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-52 h-screen bg-gray-100 text-gray-900 shadow-lg fixed flex flex-col">
      {/* Branding/Logo Area */}
      <div className="p-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">MyApp</h2>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-4 text-sm">
          <li>
            <Link to="/home" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaHome className="text-sm" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/admin" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaUsers className="text-sm" />
              <span>Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/createstaff" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Staff</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaUsers className="text-sm" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/newuser" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create User</span>
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaTruck className="text-sm" />
              <span>Vehicles</span>
            </Link>
          </li>
          <li>
            <Link to="/newvehicle" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Vehicle</span>
            </Link>
          </li>
          <li>
            <Link to="/drivers" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaTruckLoading className="text-sm" />
              <span>Drivers</span>
            </Link>
          </li>
          <li>
            <Link to="/newdrivers" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Driver</span>
            </Link>
          </li>
          <li>
            <Link to="/orderbydriver" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Driver's Order</span>
            </Link>
          </li>
          <li>
            <Link to="/order" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/neworder" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Create Order</span>
            </Link>
          </li>
          <li>
            <Link to="/orderforpickup" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaPlus className="text-sm" />
              <span>Order for Pick Up</span>
            </Link>
          </li>
          <li>
            <Link to="/dispatch" className="flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-gray-200">
              <FaClipboardList className="text-sm" />
              <span>Dispatch</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer Area in Sidebar */}
      <div className="px-4 py-6 bg-gray-200">
        <p className="text-sm text-center">© 2024 MyApp</p>
      </div>
    </div>
  );
};

export default Sidebar;
