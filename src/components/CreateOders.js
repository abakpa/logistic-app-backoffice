import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { createOrderRequest } from '../redux/slices/orderSlice'


const CreateOrders = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [details,setDetails] = useState({user_id:'',user_email:'',description:'',pickup_address:'',delivery_address:''})
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');
   
    const handleChange = (e)=>{
        setDetails({...details, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        details.user_id=userId
        details.user_email=userEmail
        const data ={details,navigate}
        dispatch(createOrderRequest(data))
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Create New Order</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
          <input
                name="user_id"
                type="hidden"
                value={userId}
                onChange={handleChange}
                />
            <input
                name="user_email"
                type="hidden"
                value={userEmail}
                onChange={handleChange}
                />
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={details.description}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter order description"
                rows="3"
                required
              />
            </div>
  
            {/* Pick Up Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Pick Up Address</label>
              <input
                type="text"
                name="pickup_address"
                value={details.pickup_address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter pick up address"
                required
              />
            </div>
  
            {/* Delivery Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <input
                type="text"
                name="delivery_address"
                value={details.delivery_address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter delivery address"
                required
              />
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Order
              </button>
            </div>
          </form>
        </div>
      </div>
     
    )
}
export default CreateOrders