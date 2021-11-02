//useState allows for state without creating class
import React, {Fragment} from 'react'
import useRegisterForm from './useRegisterForm'
// const axios = require('axios')
/*Registration controlled component.
Components must start with upper casing.
React calls Registration component with 
useState props.
*/
const Registration = () => {
  const {onTextChange, userData, onSubmit} = useRegisterForm();

    return(
      <Fragment>
      
      <section className="login">
      <div className="loginHeader">Sign Up</div>

      {/*Controlled component sign up form */}
      <form className ="form" onSubmit={e => onSubmit(e)}>

        <label className="loginText">First Name:</label><div></div> 
        <input 
        className="loginInput" required 
        type="firstName" 
        name="firstName" 
        value={userData.firstName} 
        onChange={e => onTextChange(e)}
        />        
        <div></div>

        <label className="loginText">Last Name: </label><div></div>
        <input 
        className="loginInput" required
        type="lastName" 
        name="lastName" 
        value={userData.lastName} 
        onChange={e => onTextChange(e)}
        />
        <div></div>

        <label className="loginText">Email: </label><div></div>
        <input 
        className="loginInput" required 
        type="email"
        name="email" 
        value={userData.email} 
        onChange={e => onTextChange(e)}
        />
        <div></div>

        <label className="loginText">Username: </label><div></div>
        <input  
        className="loginInput" required 
        type="username" 
        name="username" 
        value={userData.username} 
        onChange={e => onTextChange(e)}
        />
        <div></div>

        <label className="loginText">Password: </label><div></div>
        <input  
        className="loginInput" required 
        type="password"
        name="password" 
        value={userData.password} 
        onChange={e => onTextChange(e)}
        />
        <div></div>

        <label className="loginText">Confirm Password: </label><div></div> 
        <input  className="loginInput" required 
        type="password"
        name="password2" 
        value={userData.password2} 
        onChange={e => onTextChange(e)}
        />
        <div></div>

        <input type="submit" class="btn" value="Register"/>        
        <div></div>
        {/* already have account? */}
        </form>
      </section>

    </Fragment> 
    )
};

export default Registration;