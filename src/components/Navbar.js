import React from 'react'
import {FaCoins} from 'react-icons/fa'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
        <FaCoins className="icon"/>
        <h1> Coin <span className='purple'>Search</span></h1>
        <h6>Developed By <a href='https://portfolio-c8e5f.web.app/' className='colorName'> Nahom Tesfaye ©2022</a></h6>
        </div>
        </div>
  )
}

export default Navbar