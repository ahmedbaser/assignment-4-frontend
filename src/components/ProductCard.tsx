import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { Product } from '../redux/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white shadow-md border p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Stock: {product.stockQuantity}</p>
      <Rating readonly initialRating={product.rating} />
      <p>{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <Link to={`/product/${product._id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">View Details</Link>
    </div>
  );
};

export default ProductCard;










