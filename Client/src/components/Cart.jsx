// import React, { useState } from 'react'
// import "../styles/cart.css"
// import { useSelector } from 'react-redux'
// import CartCard from './CartCard'


// const Cart = (props) => {
   
//   const CartItems = useSelector ((state) => state.cart.items)
//   return (
//     <div className='card-full'>
//       <div >         
//               {CartItems.map((item)=>{
//                 return <CartCard key={item.id} item={item}/>
//             })}
          
//       </div>
//         <div className='checkout-card'>
//             <div>
//                 <h3>Price Details</h3>
//                 <div>
//                     <span>Price (1 item)</span>
//                     <span>$100</span>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cart
import React,{useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
import CartCard from "../components/CartCard"
import axios from 'axios'

const Cart = () => {
  // const[cartList,setcartList] = useState([]);

  // useEffect(()=>{
  //   CartItems();
  // },[])

  const CartItems = useSelector ((state) => state.cart.items)

  // const CartItems = async() => {
  //   const res = await axios.get('https://e-commerce-x2ij.onrender.com/getcart',{
  //     headers:{
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWQwYjVlOWI1OWNjNTQ4ODcxYzE2ZSIsImlhdCI6MTcyMzA5NDM3NSwiZXhwIjoxNzIzMTIzMTc1fQ.QQuelA3MtrPXNqi5ygExOr9qZa_Dc8lwcUgObWXL508"
  //     }
  //   })
  //   console.log(res.data);
  //   setcartList(res.data)
  // }
  return (
    <div className='flex justify-evenly m-3 text-lg'>
      <div>         
              {CartItems.map((item)=>{
                return <CartCard key={item.id} item={item}/>
            })}
          
      </div>
        <div className='p-4 m-4 flex flex-col items-center justify-center'>
            <div >
                <h3 className='font-bold text-2xl'>Price Details</h3>
                <hr/>
            </div>
                <div>
                    <span className='font-semibold '>Subtotal :</span>
                    <span>$100</span>
                    <h1>(5 items)</h1>
                    <h1 className='font-semibold'>Delivery Fees : $100</h1>
                    <h1 className='font-semibold'>Total:$200</h1>
                </div>
                <div>
                  <button className='bg-yellow-400 p-2 rounded-2xl text-xl font-medium'>CheckOut</button>
                </div>
         </div>
    </div>
  )
}

export default Cart