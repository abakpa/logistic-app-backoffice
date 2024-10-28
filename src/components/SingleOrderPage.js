import { useDispatch,useSelector } from "react-redux";
import React, { useEffect,useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
// import { createDispatchRequest } from '../redux/slices/dispatchSlice';
import { fetchOrderByIdRequest} from '../redux/slices/orderSlice';
import { createDispatchByDriverRequest } from '../redux/slices/dispatchSlice';
import FlashCard from "./FlashCard";
import io from 'socket.io-client'
const socket = io.connect('http://localhost:4000')



const SingleOrderPage = () => {
    const {orderId} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [messageReceived, setMessageReceived] = useState('')
const { dispatches} = useSelector((state) => state.dispatch);
    const [showFlashCard, setShowFlashCard] = useState(false);
    const { order } = useSelector((state) => state.order);
    const {notification} = useSelector((state)=>state.notification)

    

useEffect(()=>{
    const data = { orderId, navigate };
    dispatch(fetchOrderByIdRequest(data))
},[dispatch,orderId,navigate])

useEffect(()=>{
  socket.on('recieve_user_message',(data)=>{
    setMessageReceived(data.message)
  })
},[])

  const handlePickup = (orderId) => {
    setShowFlashCard(true);
    // Hide the flash card after 3 seconds
    setTimeout(() => {
      setShowFlashCard(false);
    }, 3000);
    const data = { orderId, navigate };
     dispatch(createDispatchByDriverRequest(data));
    
};

const renderButton = (status) => {
    switch (status) {
        case 'Order created':
            return 'Accept order';
        case 'confirm pickup':
            return 'Pick up';
        case 'Item dispatched':
            return 'Item delivered';
        case 'Item delivered':
            return 'Finish delivery';
        default:
            return <p>Accept order</p>;
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
    {order ? (
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-lg mx-auto transform transition-all hover:shadow-xl">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center border-b-2 pb-2 sm:pb-4">
          Order Summary
        </h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 truncate">
              <span className="font-semibold">Order ID:</span> {order.orderId}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 truncate">
              <span className="font-semibold">User Email:</span> {order.user_email}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 truncate">
              <span className="font-semibold">Pick-up Address:</span> {order.pickup_address}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 truncate">
              <span className="font-semibold">Delivery Address:</span> {order.delivery_address}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 truncate">
              <span className="font-semibold">Status:</span> {order.status}
            </p>
          </div>
        </div>
  
        {/* Submit Button */}
        <div className="mt-6 sm:mt-8 text-center">
          <button className="bg-blue-500 text-sm mb-12 sm:text-base text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors" onClick={() => handlePickup(order._id)}>
            {renderButton(messageReceived ? messageReceived : dispatches.status)}
          </button>
          {showFlashCard && (
            <div className="absolute top-10 right-4">
              <FlashCard message={notification} />
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-lg mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-500">No order found.</p>
      </div>
    )}
  </div>
  
  );
};

export default SingleOrderPage;
