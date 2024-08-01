import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../redux/types';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    brand: '',
    rating: ''
  });
  const [sortOrder, setSortOrder] = useState<string>('');

  // Use React Router's useLocation hook to get the current location
  const location = useLocation();

  useEffect(() => {
    // Function to fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://assignment-4-backend-beta.vercel.app/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Parse query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get('category');

    // Update filters with category from URL if present
    if (categoryFromUrl) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: categoryFromUrl
      }));
    }

    // Filter logic
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(product => product.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      filtered = filtered.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
    }

    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    if (filters.rating) {
      filtered = filtered.filter(product => product.rating >= Number(filters.rating));
    }

    if (sortOrder) {
      filtered.sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filters, sortOrder, products, location.search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleClearFilters = () => {
    setFilters({
      category: '',
      price: '',
      brand: '',
      rating: ''
    });
    setSearchTerm('');
    setSortOrder('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded-md"
        />

        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Basketball">Basketball</option>
          <option value="Soccer">Soccer</option>
          <option value="Tennis">Tennis</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Cycling">Cycling</option>
          <option value="Fitness">Fitness</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Baseball">Baseball</option>
          <option value="Bows">Bows</option>
          <option value="Hockey">Hockey</option>
          <option value="Bat">Bat</option>
          {/* Add more categories as needed */}
        </select>

        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">All Prices</option>
          <option value="0-100">0-100</option>
          <option value="101-200">101-200</option>
          <option value="201-300">201-300</option>
          <option value="301-400">301-400</option>
          <option value="401-500">401-500</option>
          {/* Add more price ranges as needed */}
        </select>

        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">All Brands</option>
          <option value="Adidas">Adidas</option>
          <option value="Hoyt Archery">Hoyt Archery</option>
          <option value="Speedo">Speedo</option>
          <option value="Trek">Trek</option>
          <option value="Babolat">Babolat</option>
          <option value="Wilson">Wilson</option>
          <option value="Bowflex">Bowflex</option>
          <option value="Mikasa">Mikasa</option>
          <option value="Kookaburra">Kookaburra</option>
          <option value="Nike">Nike</option>
          <option value="Bauer Hockey">Bauer Hockey</option>
          {/* Add more brands as needed */}
        </select>

        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="border p-2 rounded-md"
        >
          <option value="">All Ratings</option>
          <option value="2">2 and up</option>
          <option value="3">3 and up</option>
          <option value="4">4 and up</option>
          {/* Add more ratings as needed */}
        </select>

        <select
          name="sort"
          value={sortOrder}
          onChange={handleSortChange}
          className="border p-2 rounded-md"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <button onClick={handleClearFilters} className="bg-red-500 text-white p-2 rounded-md">
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;



























