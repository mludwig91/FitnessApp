import React, { Fragment, useState } from 'react'

/*useState hook returns array of current state and a
  function that lets you update the state, does not
  merge states together. can use multiple states or object
  spread operator.*/
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /*handle dynamic text change in form.
  State component renders after each update!
  */
  const onTextChange = (event) => {

    //setFormData can take function which updates previous value
    //spread operator to maintain all data of previous state since useState does not merge
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

    return (
        <Fragment>
        <div className="loginHeader">Login</div>
        <section className="login">

      {/*Controlled component sign up form */}
      <form action="create-profile.html">
      <label className="loginText">Email: </label> <div></div>
      <input  className="loginInput" type="email" required name="email" value={formData.email} onChange={e => onTextChange(e)}/>
      <div></div>

      <label className="loginText">Password: </label><div></div>
      <input  className="loginInput" type="password" required name="password" value={formData.password} onChange={e => onTextChange(e)}/>
      <div></div>
      <button className="btn">Login</button>

      </form>
      </section>
      </Fragment>
      )
};

export default Login;