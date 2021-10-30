import React from 'react'
import { Link } from 'react-router-dom'
export const Visitors = () => {
    return (
      <section class="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Fitness & Wellness Forever</h1>
          <p>
            The journey to a better life starts here. 
          </p>
          <div class="buttons">
            <Link to="/registration" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Visitors;