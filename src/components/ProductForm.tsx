import React, { useState, useEffect } from 'react';
import { Product } from '../redux/types';

interface ProductFormProps {
  product?: Product | null;
  onSave: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave }) => {
  const [formValues, setFormValues] = useState({
    
    _id: '',
    name: '',
    category: '',
    brand: '',
    stockQuantity: 0,
    price: 0,
    description: '',
    image: '',
    rating: 0,
  });

  useEffect(() => {
    if (product) {
      setFormValues(product);
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formValues.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formValues.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formValues.brand}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="stockQuantity"
        placeholder="Stock Quantity"
        value={formValues.stockQuantity}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formValues.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formValues.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formValues.image}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formValues.rating}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Save
      </button>
    </form>
  );
};

export default ProductForm;
