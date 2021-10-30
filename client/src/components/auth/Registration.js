//useState allows for state without creating class
import React, {Fragment, useState} from 'react'

/*Registration controlled component.
Components must start with upper casing.
React calls Registration component with 
useState props.
*/
const Registration = () => {

  /*useState hook returns array of, current state and a
  function that lets you update the state, does not
  merge states together. can use multiple states or object
  spread operator.*/
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    password2: "",

  });

  /*handle dynamic text change in form.
  State component renders after each update!
  */
 function onTextChange(event){

   //setFormData can take function which updates previous value
   //spread operator to maintain all data of previous state since useState does not merge
   setFormData({ ...formData, [event.target.name]: event.target.value })
 }

 const onSubmit = e => {
   e.preventDefault();
   if(formData.password !== formData.password2){
    console.log("Passwords do not match");
   }
 }
    return(
      <Fragment>
      
      <div className="loginHeader">Sign Up</div>
      <section className="login">

      {/*Controlled component sign up form */}
      <form onSubmit={e => onSubmit(e)}>

        <label className="loginText">First Name:</label><div></div> 
        <input className="loginInput" type="firstName" required name="firstName" value={formData.firstName} onChange={e => onTextChange(e)}/>
        <div></div>

        <label className="loginText">Last Name: </label><div></div>
        <input className="loginInput" type="lastName" required name="lastName" value={formData.lastName} onChange={e => onTextChange(e)}/>
        <div></div>

        <label className="loginText">Email: </label><div></div>
        <input className="loginInput" type="email" required name="email" value={formData.email} onChange={e => onTextChange(e)}/>
        <div></div>

        <label className="loginText">Username: </label> <div></div>
        <input  className="loginInput" type="username" required name="username" value={formData.username} onChange={e => onTextChange(e)}/>
        <div></div>

        <label className="loginText">Password: </label><div></div>
        <input  className="loginInput" type="password" required name="password" value={formData.password} onChange={e => onTextChange(e)}/>
        <div></div>

        <label className="loginText">Confirm Password: </label><div></div> 
        <input  className="loginInput" type="password2" required name="password2" value={formData.password2} onChange={e => onTextChange(e)}/>
        <div></div>

        <button className="btn">Confirm</button>
    
      </form>
      </section>

    </Fragment> 
    )
};

export default Registration;