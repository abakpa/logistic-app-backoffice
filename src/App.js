import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './components/Login'
import Users from './components/Users'
import CreateUsers from './components/CreateUsers'
import CreateStaff from './components/CreateStaff'
import Vehicles from "./components/Vehicle";
import CreateVehicles from "./components/CreateVehicles";
import Drivers from './components/Driver'
import CreateDrivers from "./components/CreateDrivers";
import Order from "./components/Order";
import OrderByDriver from "./components/OrderByDriver";
import CreateOrders from "./components/CreateOders";
import Dispatch from "./components/Dispatches";
import OrderForPickup from "./components/OrderForPickup";
import OrderForUser from "./components/OrderForUser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import SingleOrderPage from "./components/SingleOrderPage";
import ViewStaff from "./components/ViewStaff";
// import UserSingleOrder from "./components/UserSingleOrder";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.token);
  const token = isLoggedIn || localStorage.getItem('authToken');
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="hidden md:block">
        {token && <Sidebar />}
          </div>
        <div className="flex-1">
          <Header />
          <div className="p-4"></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admin" element={<ViewStaff />} />
            <Route path="/newuser" element={<CreateUsers />} />
            <Route path="/createstaff" element={<CreateStaff />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/newvehicle" element={<CreateVehicles />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/newdrivers" element={<CreateDrivers />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderbydriver" element={<OrderByDriver />} />
            <Route path="/orderforpickup" element={<OrderForPickup />} />
            <Route path="/orderforuser" element={<OrderForUser />} />
            <Route path="/neworder" element={<CreateOrders />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/singleorder/:orderId" element={<SingleOrderPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
