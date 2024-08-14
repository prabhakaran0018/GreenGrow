// // 
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from "axios";
// import { toast } from 'react-toastify';
// import { addItem } from '../redux/cartSlice';

// const CartCard = (props) => {
//   const token = useSelector((state=>state.user.token))
  
//   const {item}=props;
//   console.log(token);
  
//   const [quantity,setQuantity]= useState(item.quantity)
    
//     const incrementItem = async ()=>{
//       console.log(item);
//       const payload ={
//         product_id:item.id,
//         quantity:quantity + 1
//       };
//       try{
//       const res = await axios.post("http://localhost:3000/addtocart",payload,{
//         headers : {Authorization: `Bearer ${token}`}
//       });
//       setQuantity(quantity + 1)
//       toast.success("Item increment")
//       console.log(res)
      

//     }catch(err){
//       console.log( err)
//     }
//   }

//   return (
//     <div className='flex items-center border-8 gap-2 rounded-2xl mb-4'>
//       <div>
//         <img className='w-[150px] h-[150px]' src={item.image} alt={item.name} />
//       </div>
//       <div>
//         <h3 className='font-semibold text-2xl'>{item.name}</h3>
//         {/* <button onClick={handleSubtract}>-</button>&nbsp; */}
//         {quantity}&nbsp;
//         <button onClick={incrementItem}>+</button>
//         <h3>${item.price}</h3>
//       </div>
//     </div>
//   );
// }

// export default CartCard;
// import React from 'react'
// import "../style/cart.css"

// const CartCard = (props) => {
//     const {item}=props;

//   return (
//     <div className="cart-container" key={item.id}>
//     <div >
//     <img  src={item.image} alt={item.title}  width={50}/>
    
//     <div>{item.title}</div>
//    <div>
//     <button>-</button>&nbsp;
//     {item.quantity || 1}&nbsp;
//     <button>+</button>
//    </div>
//     <div>${item.price}</div>
//     </div>
// </div>
//   )
// }

// export default CartCard;

import React from 'react';

import { useDispatch } from 'react-redux';
import { updateCartItem, removeCartItem } from "../redux/cartSlice"

const CartCard = (props) => {
    const { item } = props;
    const dispatch = useDispatch();

    const handleDecreaseQuantity = () => {
        if (item.quantity > 1) {
            dispatch(updateCartItem({ ...item, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeCartItem(item.id));
        }
    };

    const handleIncreaseQuantity = () => {
        dispatch(updateCartItem({ ...item, quantity: item.quantity + 1 }));
    };

    return (
        <div className="cart-container" key={item.id}>
            <div>
                <img src={item.image} alt={item.name} width={50} />
                <div>{item.name}</div>
                <div>
                    <button onClick={handleDecreaseQuantity}>-</button>&nbsp;
                    {item.quantity || 1}&nbsp;
                    <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <div>${item.rate}</div>
            </div>
        </div>
    );
}

export default CartCard;