import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {fetchActiveDispatchRequest} from '../redux/slices/dispatchSlice'

const Dispatches = () => {
    const dispatch = useDispatch()
    const {dispatches} = useSelector((state)=>state.dispatch)
    useEffect(()=>{
        dispatch(fetchActiveDispatchRequest())
    },[dispatch])


    return(
        <div className="min-h-screen p-10 md:pl-60 md:pr-20 md:py-20 mb-5 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">List of Dispatches</h2>
   <div className="overflow-x-auto">
     <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
       <thead>
         <tr className="bg-gray-200 text-gray-700 text-xs text-left">
           <th className="py-3 px-4 border-b">Order ID</th>
           <th className="py-3 px-4 border-b">Pick Up Address</th>
           <th className="py-3 px-4 border-b">Delivery Address</th>
           <th className="py-3 px-4 border-b">Description</th>
           <th className="py-3 px-4 border-b">Driver's Name</th>
           <th className="py-3 px-4 border-b">Status</th>
         </tr>
       </thead>
       <tbody>
         {(!dispatches || !Array.isArray(dispatches) || dispatches.length === 0) ? (
           <tr>
             <td colSpan="6" className="text-center py-4">
               No dispatch available
             </td>
           </tr>
         ) : (
            dispatches.map((dispatch, index) => (
             <tr key={index} className="hover:bg-gray-100 text-sm">
               <td className="py-2 px-4 border-b">{dispatch.order.orderId}</td>
               <td className="py-2 px-4 border-b">{dispatch.order.pickup_address}</td>
               <td className="py-2 px-4 border-b">{dispatch.order.delivery_address}</td>
               <td className="py-2 px-4 border-b">{dispatch.order.description}</td>
               <td className="py-2 px-4 border-b">{dispatch.admin.name}</td>
               <td className="py-2 px-4 border-b">{dispatch.dispatch.status}</td>
             </tr>
           ))
         )}
       </tbody>
     </table>
   </div>
 </div>
     
    )
}

export default Dispatches