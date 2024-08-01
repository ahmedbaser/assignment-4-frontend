import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { Product } from '../redux/types';
import Rating from 'react-rating';
import { categories } from '../redux/categories';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://assignment-4-backend-beta.vercel.app/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (id: string) => {
    navigate(`/product/${id}`);
  };
 
  
  return (
    <div className="p-4">
      {/* Hero Section */}
      <section className="mb-8">
        <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false}>
          <div className='relative w-full h-[500px] mt-6'>
            <img src="https://images.unsplash.com/photo-1603722039047-bc9997bfa963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/text=Discount+1" className='h-full w-full object-cover transition-transform  hover:scale-105' alt="Discount 1" />
            <p className="legend text-white font-bold">Get 10% off on all items!</p>
          </div>
         <div className='relative w-full h-[500px] mt-6'>   
            <img src="https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/text=Discount+2" className='h-full w-full object-cover transition-transform  hover:scale-150' alt="Discount 2" />
            <p className="legend">Free shipping on orders over $50!</p>
         </div>
         <div className='relative w-full h-[500px] mt-6'>   
            <img src="https://images.unsplash.com/photo-1517177646641-83fe10f14633?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/text=Discount+3" className='h-full w-full object-cover transition-transform hover:scale-25' alt="Discount 3" />
            <p className="legend">Buy one, with 20% off!</p>
        </div>
         <div className='relative w-full h-[500px] mt-6'>   
            <img src="https://images.unsplash.com/photo-1467044705596-744699fa8931?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/text=Discount+4" className='h-full w-full object-cover transition-transform hover:scale-y-105' alt="Discount 3" />
            <p className="legend">Buy ten, get one free on select items!</p>
        </div>
      </Carousel>
    </section>
   


      {/* Featured Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-center font-bold mt-5 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 8).map(product => (
            <div key={product._id} className="border p-4 rounded-md shadow-md">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-600">Stock: {product.stockQuantity}</p>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <Rating 
                initialRating={product.rating}
                readonly
                emptySymbol={<span className="icon-star-empty" />}
                fullSymbol={<span className="icon-star-full" />}
                className="my-2"/>
              <Rating readonly initialRating={product.rating} />
               
            <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold">${product.price}</p>
              <button
                onClick={() => handleViewDetails(product._id)}
                className="bg-blue-500 text-white p-2 rounded-md mb-2 mt-2">
                View Details
              </button>
             
            </div>
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-center font-bold mt-5 mb-8">Categories</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
              className="bg-gray-200 p-2 rounded-md"> 
              {category}
             </button>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-center font-bold mt-5 mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="border p-2 w-full rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border p-2 w-full rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="border p-2 w-full rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;



















