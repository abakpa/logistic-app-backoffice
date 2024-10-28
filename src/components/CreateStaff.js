import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { createAdminRequest } from '../redux/slices/adminSlice'

const CreateUsers = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [details,setDetails] = useState({name:'',phone:'',email:'',address:'',password:'',role:''})

    const handleChange = (e)=>{
        setDetails({...details, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data ={details,navigate}
        dispatch(createAdminRequest(data))
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-14 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={details.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={details.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Address Input */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={details.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={details.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Role Input */}
            <select
              name="role"
              value={details.role}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="manager">Manager</option>
              <option value="rider">Rider</option>
            </select>
  
            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={details.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Error Message */}
            {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
  
            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 mb-8 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
}
export default CreateUsers