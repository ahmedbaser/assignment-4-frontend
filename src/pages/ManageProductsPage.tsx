import React, { useState } from 'react';
import { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } from '../redux/api';
import { Product } from '../redux/types';
import { Modal, Toast } from '../components/Feedback';
import ProductForm from '../components/ProductForm';

const ManageProducts: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');


  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      setToastMessage('Product deleted successfully');
    } catch (error) {
      setToastMessage('Error deleting product');
    }
  };

  const handleSave = async (product: Product) => {
    try {
      if (selectedProduct) {
        await updateProduct({
          id: selectedProduct._id, 
          updatedProduct: {...product}
        }).unwrap();
        setToastMessage('Product updated successfully');
      } else {
        await addProduct(product).unwrap();
        setToastMessage('Product added successfully');
      }
      setModalOpen(false);
    } catch (error) {
      setToastMessage('Error saving product');
    }
  };

  const handleAddNew = () => {
    setSelectedProduct(null);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Manage Products</h1>
      <button onClick={handleAddNew} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
        Add New Product
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching products</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div key={product._id} className="border p-4 rounded-md shadow-md">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-md mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-gray-600">Stock: {product.stockQuantity}</p>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <button onClick={() => handleEdit(product)} className="text-blue-500 hover:underline mb-2">
              Edit
            </button>
            <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white ml-52 px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <ProductForm
            product={selectedProduct}
            onSave={(product) => handleSave(product)}
          />
        </Modal>
      )}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
    </div>
  );
};

export default ManageProducts;
























