import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {fetchVehicleRequest} from '../redux/slices/vehicleSlice'

const Vehicle = () =>{
    const dispatch = useDispatch()
    const {loading,vehicles,error} = useSelector((state)=>state.vehicle)

    useEffect(()=>{
        dispatch(fetchVehicleRequest())
    },[dispatch])
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <svg
                className="animate-spin h-10 w-10 text-blue-500"
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
            <p className="text-blue-500 ml-4">Loading vehicles...</p>
        </div>
    );
}
if(error)return <p>Error: {error}</p>
    return(
        <div className="min-h-screen p-6 md:pl-60 md:pr-20 md:py-20 bg-gray-100 mt-8">
             <h2 className="text-2xl font-bold mb-6 text-center">List of Vehicles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-xs">
              <th className="py-3 px-4 border-b text-left">Type</th>
              <th className="py-3 px-4 border-b text-left">Capacity</th>
              <th className="py-3 px-4 border-b text-left">License Plate</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No vehicles available
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle, index) => (
                <tr key={index} className="hover:bg-gray-100 text-sm">
                  <td className="py-2 px-4 border-b text-left">{vehicle.type}</td>
                  <td className="py-2 px-4 border-b text-left">{vehicle.capacity}</td>
                  <td className="py-2 px-4 border-b text-left">{vehicle.license_plate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Vehicle