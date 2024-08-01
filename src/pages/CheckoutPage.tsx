import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {selectCartItems, selectCartTotal} from '../redux/selectors'
import { clearCart,  } from '../redux/slices/cartSlice';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryAddress: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userDetails,
        cartItems,
        paymentMethod,
        totalPrice: cartTotal,
      };

      const response = await axios.post('https://assignment-4-backend-beta.vercel.app/api/orders', orderData);
      console.log('Order placed successfully:', response.data);
      dispatch(clearCart());
      navigate('/order-success');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">User Details</h2>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="deliveryAddress"
              placeholder="Delivery Address"
              value={userDetails.deliveryAddress}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
                className="mr-2"
              />
              Cash on Delivery
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Stripe"
                checked={paymentMethod === 'Stripe'}
                onChange={() => setPaymentMethod('Stripe')}
                className="mr-2"
              />
              Stripe (optional)
            </label>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p>Total Price: ${cartTotal.toFixed(2)}</p>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;


















