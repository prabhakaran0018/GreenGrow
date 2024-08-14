import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerEditForm = ({ productId, onClose, onProductUpdated }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    rate: '',
    image: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/getProduct/${productId}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3000/updateProduct/${productId}`, product);
      if (res.status === 200) {
        alert('Product updated successfully!');
        onProductUpdated(); // Notify parent component to refresh the list
        onClose(); // Close the edit form
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('An error occurred while updating the product');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="form-input"
          placeholder="Description"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          className="form-input"
          placeholder="Category"
        />
        <input
          type="number"
          name="rate"
          value={product.rate}
          onChange={handleChange}
          className="form-input"
          placeholder="Rate"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="form-input"
          placeholder="Image URL"
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default FarmerEditForm;
