import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import "../styles/AddProduct.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const[name,setName]=useState("")
    const[discription,setDiscription] = useState("")
    const[rate,setRate] = useState("")
    const[expiredYear,setExpiredYear] = useState("")
    const[Category,setCategory] = useState("")
    const[image,setImage] = useState("")
    const dispatch = useDispatch()
    const navigate =useNavigate()

    const addProduct =  async (e)=>{
        e.preventDefault()
        const payload = {
            name:name,
            description : discription,
            rate : rate,
            expiredyear : expiredYear,
            category :Category,
            image : image

        }
        try{
            const res = await axios.post("http://localhost:3000/additem",payload)
            console.log(res)
            console.log("product added");
            toast.success("product added successfully")
            navigate("/farmer/product")
            

        }catch(err){
            console.log(err)
            toast.error(err)
        }
        // console.log(newitem)
        // dispatch(addItem(newitem)) 
    }


  return (
    <div className="form-container-full">
    <div className="form-container">
    <h1 className="form-title">Enter Product Details</h1>
    <form className="form" onSubmit={addProduct}>
        
        <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="Name" required className="form-input" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="year" className="form-label">ExpiredYear:</label>
            <input type="text" id="year" name="Year" required min="1886" max="2024" className="form-input" value={expiredYear} onChange={(e)=>setExpiredYear(e.target.value)}/>
        </div> 
        <div className="form-group">
            <label htmlFor="color" className="form-label">Discription:</label>
            <input type="text" id="color" name="Color" required className="form-input" value={discription} onChange={(e)=>setDiscription(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="rate" className="form-label">Rate:</label>
            <input type="text" id="rate" name="Rate" required step="0.01" className="form-input" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        </div>
         <div className="form-group">
            <label htmlFor="regno" className="form-label">Category:</label>
            {/* <input type="text" id="regno" name="Regno" required className="form-input"  /> */}
            <select type="option"
                    className='p-2 rounded-xl bg-gray-600 bg-opacity-10'
                        value={Category}
                        onChange={(e)=>setCategory(e.target.value)}>
                        <option value="" className='text-black'>Category</option>
                        <option value="Male">Orgainic Seeds</option>
                        <option value="Female">Orgainic fertilizer</option>
                    </select>
        </div> 
         <div className="form-group">
            <label htmlFor="carimg" className="form-label">Product Image:</label>
            <input type="file" id="carimg" name="Carimg" required className="form-input" value={image} onChange={(e)=>setImage(e.target.value)} />
        </div> 
        <div className="form-group">
            <button type="Submit" className="form-button"  >Submit</button>
        </div>
    </form>
</div>
</div>
  )
}

export default AddProduct