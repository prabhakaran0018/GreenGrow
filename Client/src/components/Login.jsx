import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import "../styles/login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';
import { Link } from 'react-router-dom';


const Login = () => {
  const[email,setEmail] =useState("")
  const[password,setPassword] =useState("")
  const[item,setItem]=useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelEmailChange = (e)=>{
    setEmail (e.target.value);

  }
  const handelPasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handelClick = async (e)=>{
    e.preventDefault();
    const payload = {
        email:email,
        password:password,
    
    };
    try{
    const res = await axios.post("http://localhost:3000/login",payload);
    console.log("login=>",res)
    dispatch(setToken(res.data))
    localStorage.setItem("token",res.data.token)
    toast.success("login SUCCESSFULL")
    navigate("/")
    }catch(err){
      toast.error(err.response.data.message);

    }
  }
  return (
    <div className="background-container">
    <div className="signup-container">
        <h1>Login</h1>
        <form onSubmit={handelClick}>
            <label htmlFor="usermail">Email</label>
            <input  value={email} onChange={handelEmailChange} className="form-input"/>
            <label htmlFor="password">Password</label>
            <input  value={password} onChange={handelPasswordChange}  className="form-input" type="password" />
            <button type="Sumbit" >Login</button>
            <span>Create a new account </span> <Link to= "/signup">Click here</Link>
            {/* <ToastContainer position="top-right" /> */}
        </form>
    </div>
</div>
  )
}

export default Login