import { useState } from 'react'
import Header from './Component/Header'
import { Provider } from 'react-redux'

import './App.css'
import AddProduct from './Component/AddProduct'
import store from "./redux/store"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <Provider store={store}>
      <Header  />
      <BrowserRouter>
      <Routes>
      <Route path="/AddCart" element={<AddProduct />}/>
      
      
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
