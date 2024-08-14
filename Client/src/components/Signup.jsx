import React, { useState } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_NO,setPhone_No] = useState("");
  const [password, setPassword] = useState('');

  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/signup", {
        username: name,
        email: email,
        phone_NO : phone_NO,
        password: password,
      })
      console.log(res);
      console.log("user registered");
      navigate("/login");
      toast.success('User Registered Successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      
    }

  }


  return (
    <div className="background-container">
      <div className="signup-container">
        <h1 >Create a Account</h1>
        <form onSubmit={handleregister}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required className="form-input" value={name} onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="usermail">Phone_NO</label>
          <input type="number" id="usermail" name="usermail" required className="form-input" value={phone_NO} onChange={(e)=>setPhone_No
            (e.target.value)}/>

          <label htmlFor="usermail">Email</label>
          <input type="email" id="usermail" name="usermail" required className="form-input" value={email} onChange={(e)=>setEmail(e.target.value) }/>


          {/* <label htmlFor="dob">Date of Birth</label>
                    <input type="text" id="dob" name="dob" required /> */}

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required className="form-input"  value={password} onChange={(e)=>setPassword(e.target.value)}/>

          {/* <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required /> */}

          <button type="Submit" >Sign Up</button>
          <div className="alredy">
            <label>Already have a Account?</label><a href="/login" className="top">Login</a></div>

        </form>
      </div>
    </div>
  )
}

export default Signup