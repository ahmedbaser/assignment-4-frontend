import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go To Home
      </button>
    </div>
  );
};

export default OrderSuccessPage;
