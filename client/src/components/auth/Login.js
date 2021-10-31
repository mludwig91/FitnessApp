import React, { Fragment, useState } from 'react'
import useRegisterForm from './useRegisterForm'

/*useState hook returns array of current state and a
  function that lets you update the state, does not
  merge states together. can use multiple states or object
  spread operator.*/
const Login = () => {
    const {userData, onTextChange} = useRegisterForm();

    return (
      <Fragment>
      <section className="login">
      <div className="loginHeader">Login</div>

      {/*Controlled component sign up form */}
      <form onSubmit={e => onSubmit(e,false)}>
      <label className="loginText">Email: </label> <div></div>
      <input  className="loginInput" type="email" required name="email" value={userData.email} onChange={e => onTextChange(e)}/>
      <div></div>

      <label className="loginText">Password: </label><div></div>
      <input  className="loginInput" type="password" required name="password" value={userData.password} onChange={e => onTextChange(e)}/>
      <div></div>
      <button className="btn">Login</button>

      </form>
      </section>
      </Fragment>
      )
};

export default Login;