import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'

const AddProduct = () => {
    const[name,setName]=useState("")
    const[discription,setDiscription] = useState("")
    const[rate,setRate] = useState("")
    const dispatch = useDispatch()

    const addProduct = ()=>{
        const newitem = {
            name,
            discription,
            rate
        }
        console.log(newitem)
     
        dispatch(addItem(newitem)) 

    }


  return (
    <div className="car-form-container">
    <h1 className="car-form-title">Enter Product Details</h1>
    <form className="car-form">
        
        <div className="car-form-group">
            <label htmlFor="name" className="car-form-label">Name:</label>
            <input type="text" id="name" name="Name" required className="car-form-input" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        {/* <div className="car-form-group">
            <label htmlFor="year" className="car-form-label">ExpiredYear:</label>
            <input type="text" id="year" name="Year" required min="1886" max="2024" className="car-form-input"/>
        </div> */}
        <div className="car-form-group">
            <label htmlFor="color" className="car-form-label">Discription:</label>
            <input type="text" id="color" name="Color" required className="car-form-input" value={discription} onChange={(e)=>setDiscription(e.target.value)}/>
        </div>
        <div className="car-form-group">
            <label htmlFor="rate" className="car-form-label">Rate:</label>
            <input type="text" id="rate" name="Rate" required step="0.01" className="car-form-input" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        </div>
        {/* <div className="car-form-group">
            <label htmlFor="regno" className="car-form-label">Category:</label>
            <input type="text" id="regno" name="Regno" required className="car-form-input" />
        </div> */}
        {/* <div className="car-form-group">
            <label htmlFor="carimg" className="car-form-label">Product Image:</label>
            <input type="text" id="carimg" name="Carimg" required className="car-form-input" />
        </div> */}
        <div className="car-form-group">
            <button type="button" onClick={addProduct} className="car-form-button">Submit</button>
        </div>
    </form>
</div>
  )
}

export default AddProduct