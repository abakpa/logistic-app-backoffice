import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOrderRequest,fetchOrderByIdRequest } from '../redux/slices/orderSlice';

const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { order, loading, error } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, [dispatch]);

    const handleOrder=(orderId)=>{
      const data = { orderId, navigate };
      dispatch(fetchOrderByIdRequest(data))
  }

    if (loading) return <p>Loading order...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="min-h-screen p-10 md:pl-60 md:pr-20 md:py-20 mb-5 bg-gray-100">
             <h2 className="text-2xl font-bold mb-6 text-center">List of Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-xs text-left">
                <th className="py-3 px-4 border-b">Order ID</th>
                <th className="py-3 px-4 border-b">Pick Up Address</th>
                <th className="py-3 px-4 border-b">Delivery Address</th>
                <th className="py-3 px-4 border-b">Description</th>
                <th className="py-3 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {(!order || !Array.isArray(order) || order.length === 0) ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No orders available
                  </td>
                </tr>
              ) : (
                order.map((orders, index) => (
                  <tr onClick={()=>handleOrder(orders._id)} key={index} className="hover:bg-gray-100 text-sm">
                    <td className="py-2 px-4 border-b">{orders.orderId}</td>
                    <td className="py-2 px-4 border-b">{orders.pickup_address}</td>
                    <td className="py-2 px-4 border-b">{orders.delivery_address}</td>
                    <td className="py-2 px-4 border-b">{orders.description}</td>
                    <td className="py-2 px-4 border-b">{orders.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Order;
