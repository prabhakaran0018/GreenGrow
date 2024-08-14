
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Products from "./components/Products";

import './App.css'

import AddProduct from "./components/AddProduct";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setToken } from "./redux/userSlice";
import FarmerLogin from "./components/FarmerLogin";
import FarmerSignup from "./components/FarmerSignup";
import Cart from "./components/Cart";
import FarmerProduct from "./components/FarmerProduct";
import FarmerEditProduct from "./components/FarmerEditProduct";

const App =()=>{
  const[cart,setCart]=useState([])
 const dispatch =  useDispatch()
 useEffect(()=>{
 const token = localStorage.getItem('token')

 if(token){
  dispatch(setToken(token))
 }

 });


  return(
    
      <BrowserRouter>
      <ToastContainer />
      <Header cartLength={cart.length}/>
      <Routes>
  
    
    
    <Route path="/" element={<Products/>}/>
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/farmer/login" element={<FarmerLogin/>}/>
    <Route path="/farmer/signup" element={<FarmerSignup/>}/>
    <Route path="/additem" element={<AddProduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/farmer/product" element={<FarmerProduct/>}/>
    <Route path="/farmer/product/edit" element={<FarmerEditProduct/>}/>

    

    </Routes>
    </BrowserRouter>
    
    
   
    
  )
  
}
export default App;