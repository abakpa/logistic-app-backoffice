import React, {useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { createVehicleRequest } from '../redux/slices/vehicleSlice'

const CreateVehicles = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading} = useSelector(state=>state.vehicle)
    const [details,setDetails] = useState({type:'',capacity:'',license_plate:''})

    const handleChange = (e)=>{
        setDetails({...details, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data ={details,navigate}
        dispatch(createVehicleRequest(data))
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Create New Vehicle</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
              <input
                type="text"
                name="type"
                value={details.type}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter vehicle type"
                required
              />
            </div>
  
            {/* Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={details.capacity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter vehicle capacity"
                required
              />
            </div>
  
            {/* License Plate */}
            <div>
              <label className="block text-sm font-medium text-gray-700">License Plate</label>
              <input
                type="text"
                name="license_plate"
                value={details.license_plate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter license plate"
                required
              />
            </div>
  
            {/* Submit Button */}
            <div>
            {loading ? (
                        <button type="button" className="w-full p-3 bg-blue-500 text-white rounded-lg flex items-center justify-center" disabled>
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Loading"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="opacity-25"
                                />
                                <path
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    className="opacity-75"
                                />
                            </svg>
                            Processing...
                        </button>
                    ) : (
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 mb-14 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Vehicle
              </button>
                    )}
            </div>
          </form>
        </div>
      </div>
    
    )
}
export default CreateVehicles