import React from 'react'
import { PRODUCT } from '../constant'
import ProductCart from './ProductCart'
import { useState , useEffect } from 'react'
import axios from "axios"

const Products = (props) => {
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
    {productList.map((item)=><ProductCart key={item.id} item={item} setCart={props.setCart}/>)}
   
   
    </div></div>
  )
}

export default Products