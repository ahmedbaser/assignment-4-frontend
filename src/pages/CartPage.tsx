import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../redux/selectors';
import {removeFromCart,updateQuantity,} from '../redux/slices/cartSlice';


const CartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const vat = 0.15;
  const totalIncludingVAT = cartTotal * (1 + vat);

  const handleIncreaseQuantity = (itemId: string) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item && item.quantity < item.stockQuantity) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (itemId: string) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const isCheckoutDisabled = cartItems.some(item => item.stockQuantity === 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Cart</h1>
      <h1 className="text-2xl  font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>{item.category}</p>
                  <p>{item.brand}</p>
                  <p>${item.price}</p>
                  <p>Stock: {item.stockQuantity}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-r"
                      disabled={item.quantity >= item.stockQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-bold">Total: ${cartTotal.toFixed(2)}</p>
            <p className="text-lg font-bold">Total Including VAT: ${totalIncludingVAT.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              disabled={isCheckoutDisabled}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;









