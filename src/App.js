import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import "./App.css"
import Contact from './Contact'
import Products from './Products'
import About from './About'

function App() {
  return (
    <div>
      <div className='navbar'>
      <img src="https://img.freepik.com/premium-vector/logo-shopping-cart-that-is-black-background_615068-16724.jpg" className="logo"/>
<Link className='link' to="/">Home</Link>
<Link className='link' to="/about ">About</Link>
  <Link className='link' to="/products ">Products</Link>
  <Link className='link' to="/contact ">Contact</Link>
</div>

<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </div>
  )
}

export default App
