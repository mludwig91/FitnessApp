import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
      <nav class="navbar bg-dark">
        <h1>
        <a><i class="fas fa-code"></i>ForeverFit</a>
        </h1>
        <ul>
          <li><Link to="/registration">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="">About</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;