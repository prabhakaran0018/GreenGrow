import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setCart } from '../redux/cartSlice';
import axios from 'axios';

const Header = (props) => {
  const cartItems = useSelector((state)=> state.cart.items);
  const token = useSelector((state)=>state.user.token)
  console.log(token)
  console.log(cartItems);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token){
      getCart();
    }
  },[token])

  const getCart = async () => {
    try {
      const res = await axios.get('http://localhost:3000/getcart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setCart(res.data.productDetails));
    } catch (error) {
      console.error('Error fetching cart:', error);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error, e.g., redirect to login or show a message
        console.error('Unauthorized! Please check your token or login again.');
      }
    }
  };

  
  return (
    <header>
      <div className=''><img src="" alt="LOGO" /></div>
      <div className='nav'>
      <Link to="/">Product</Link>
      <span>About</span>
      <Link to="/farmer/login">AddProduct</Link>
      <Link to='/cart'>Cart</Link>
      { token ? 
      <Link to="/login"><span>Signout</span></Link>: <Link to="/login"><span>Signin</span></Link>}
      </div>
    </header>
  )
}

export default Header