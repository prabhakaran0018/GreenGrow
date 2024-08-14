import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios"
import FarmerProductCard from './FarmerProductCard';

const FarmerProduct = (props) => {
    const [productList,setProductList] = useState([]);
    useEffect(()=>
    {
      getproducts()
    },[]);
    const getproducts = async ()=>{
      const res = await axios.get("http://localhost:3000/getitem")
     setProductList(res.data.products)
      console.log(res.data)
  
    }
    
  return (
    <div className='container-boader'>
    <div className='container'>
      {productList.map((item)=><FarmerProductCard key={item.id} item={item} setCart={props.setCart}/>)}
     
     
      </div></div>
  )
}

export default FarmerProduct