import React from 'react'
import { useSelector } from 'react-redux'

const Header = ( props) => {
    const cart = useSelector((state)=> state.cart.items)
  return (
    <header>
      <div><img src="" alt="LOGO" /></div>
      <div className='nav'>
      <span>Product</span>
      <span>About</span>
      <Link to>  <span>Cart:{cart.length}</span></Link>
      <span>Signin</span>
      </div>
    </header>
  )
}

export default Header