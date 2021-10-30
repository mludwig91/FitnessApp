import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
          <ol>
          <li><Link to="/registration" >Register</Link></li>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="" className="about">About</Link></li>
          </ol>
        </nav>
    )
}

export default Navbar;