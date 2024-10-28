import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {fetchDriverRequest} from '../redux/slices/driverSlice'

const Driver = () =>{
    const dispatch = useDispatch()
    const {loading,drivers,error} = useSelector((state)=>state.driver)

    useEffect(()=>{
        dispatch(fetchDriverRequest())
    },[dispatch])
if(loading)return <p>Loading...</p>
if(error)return <p>Error: {error}</p>
    return(
        <div className="min-h-screen p-6 md:pl-60 md:pr-20 md:py-20 bg-gray-100 mt-5">
        <h2 className="text-lg font-semibold mb-4 text-center">List of Drivers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-xs">
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Phone</th>
                <th className="py-3 px-4 border-b text-left">Vehicle Type</th>
                <th className="py-3 px-4 border-b text-left">License Plate</th>
              </tr>
            </thead>
            <tbody>
              {drivers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No drivers available
                  </td>
                </tr>
              ) : (
                drivers.map((driver, index) => {
                return driver.admin_id && driver.admin_id.name?(
                  <tr key={index} className="hover:bg-gray-100 text-sm">
                    <td className="py-2 px-4 border-b text-left">{driver.admin_id.name}</td>
                    <td className="py-2 px-4 border-b text-left">{driver.admin_id.phone}</td>
                    <td className="py-2 px-4 border-b text-left">{driver.vehicle_id.type}</td>
                    <td className="py-2 px-4 border-b text-left">{driver.vehicle_id.license_plate}</td>
                  </tr>
                ):null

})
              )}
            </tbody>
          </table>
        </div>
      </div>
  
    )
}

export default Driver