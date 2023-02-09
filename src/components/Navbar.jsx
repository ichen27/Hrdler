import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'



export default function Navbar(){

    return(
    
    <div className='navbar'>
        <div className="header">
      <div className="logo">
      <Link to="/">
        <img src="../../public/logo.jpg" alt="Logo" className='pic'/>
        </Link>
        
      </div>
      <div className="search-input">
        <input type="text" placeholder="Search Hrdler" />
      </div>

      <div className="nav-links">
        <Link to="/" className='homelink'>Home</Link>
        <Link to="/myHurdler" className='pagelink'>My Hurdler</Link>
        <Link to="/login" className='pagelink'>Login</Link>
      </div>


      <div className="user-menu">
        
        <img src="../../public/icon2.png" alt="" />
        <span>Ivan Chen</span>
      </div>
    </div>
  
    </div>
    )
}
