import React from 'react'
import {  updateCartItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'


const ProductCart = (props) => {
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        console.log("item added" , props.item)
     
      dispatch(updateCartItem(props.item));
    }
  return (
<div className='card'>
   
        <img className='product-cart-img' src={props.item.image} alt="" />
        <div className='card-title'>
        <h2 className='title'>{props.item.name}</h2>
        <p>{props.item.description}</p>

   
        <div className='price' >
            ${props.item.rate}
        </div>
        <button className=" button "onClick={handleAdd}>Add to Cart</button>
        </div>
</div>
        
  )
}

export default ProductCart