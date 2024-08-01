import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Product } from '../redux/types';
import Rating from 'react-rating';
import { selectCartItems } from '../redux/selectors';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://assignment-4-backend-beta.vercel.app/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = cartItems.find(item => item._id === product._id);
      if (!cartItem || cartItem.quantity < product.stockQuantity) {
        dispatch(addToCart(product));
      }
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const cartItem = cartItems.find(item => item._id === product._id);
  const isAddToCartDisabled = cartItem && cartItem.quantity >= product.stockQuantity;

  return (
    <div className="p-4 max-w-4xl mx-auto">
       <h1 className='text-2xl text-center font-bold mb-10'>Single Product</h1>
      <div className="flex flex-col md:flex-row">
         <div className="md:w-1/2">
          <PhotoProvider>
            <PhotoView src={product.image}>
              <img src={product.image} alt={product.name} className="h-96 w-full object-cover rounded-md mb-4" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
          <p className="text-gray-600 mb-2">Stock: {product.stockQuantity}</p>
          <Rating
            initialRating={product.rating}
            readonly
            emptySymbol={<span className="icon-star-empty" />}
            fullSymbol={<span className="icon-star-full" />}
            className="my-2"
          />
         <Rating readonly initialRating={product.rating} />

          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-600 font-bold text-xl mb-4">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className={`bg-blue-500 text-white p-2 rounded-md ${isAddToCartDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isAddToCartDisabled}
          >
            {isAddToCartDisabled ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

















