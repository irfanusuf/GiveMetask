import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div>
        <div className='navbar'> 
        <ul>

            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/blogs" >Blogs</Link></li>
          
        </ul>
        
        
        </div>




    </div>
  )
}

export default Navbar