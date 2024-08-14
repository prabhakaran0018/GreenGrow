// 
import React, { useState } from 'react';
import axios from 'axios';
import EditForm from "./FarmerEditProduct";

const FarmerProductCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/deleteProduct/${id}`);
      console.log(res.data);
      if (res.status === 200) {
        alert('Product deleted successfully!');
        // Optionally, update your state or re-fetch the product list to reflect the deletion
      } else {
        alert('Failed to delete the product');
      }
    } catch (error) {
      console.error('Error deleting the product:', error);
      alert('An error occurred while deleting the product');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleProductUpdated = () => {
    // Logic to refresh or update the product list
    // This could be done through a parent component or context
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className='card'>
      <img className='product-cart-img' src={props.item.image} alt="" />
      <div className='card-title'>
        <h2 className='title'>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <div className='price'>${props.item.rate}</div>
        <button className="button-edit" onClick={handleEdit}>Edit</button>
        <button className="button-delete" onClick={() => handleDelete(props.item.id)}>Delete</button>
      </div>
      {isEditing && (
        <EditForm
          productId={props.item.id}
          onClose={handleCloseEdit}
          onProductUpdated={handleProductUpdated}
        />
      )}
    </div>
  );
};

export default FarmerProductCard;
