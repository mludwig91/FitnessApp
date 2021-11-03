//useState allows for state without creating class
import React, {Fragment} from 'react';
import useRegisterForm from './useRegisterForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import{setAlert} from '../../actions/alert';
import { PropTypes } from 'prop-types';
const axios = require('axios');


// const axios = require('axios')
/*Registration controlled component.
Components must start with upper casing.
React calls Registration component with 
useState props.
*/
const Registration = ({ setAlert }) => {
  const {onTextChange, userData} = useRegisterForm();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    
    if(userData.password !== userData.password2){
      setAlert("Passwords do not match", 'danger')
    } else{
      console.log(userData)
    }
 
     //  build user object
     const newUser = {
      email: userData.email,
      password: userData.password,
      lastName: userData.lastName,
      username: userData.username,
      firstName: userData.firstName
 
    }
 
    try {
      //axios auto serializes object into json and set content type
      const res = await axios.post('/api/users', newUser);
      console.log(res.data)
    } catch (err) {
      console.error(err.response.data)
    }
   };
  
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
        <Link to="/login"> Already have an account?</Link>
        </form>
      </section>

    </Fragment> 
    )
};

Registration.propTypes ={
  setAlert: PropTypes.func.isRequired,
};
//connect adds redux capability for alerts. 
//connect(state, Object with actions)
export default connect(null, {setAlert}) (Registration);