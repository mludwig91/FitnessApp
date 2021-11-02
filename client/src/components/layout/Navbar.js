import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
      <nav className="navbar bg-dark">
        
        <h1>
        <a href="index.html" className="fas fa-brand">ForeverFit</a>
        </h1>

        <ul className="navList">
          <li><Link to="/registration" >Register</Link></li>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="" className="about">About</Link></li>
          </ul>
        </nav>
    )
}

export default Navbar;