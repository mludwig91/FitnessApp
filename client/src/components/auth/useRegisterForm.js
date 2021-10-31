import { useState, useEffect } from 'react'

/*useState hook returns array of, current state and a
  function that lets you update the state, does not
  merge states together. can use multiple states or object
  spread operator.*/
  const useRegisterForm = () => {
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    password2: "",

  });

  const [errors, setErrors] = useState({});

  /*handle dynamic text change in form.
  State component renders after each update!
  */
 function onTextChange(event){
   //setuserData can take function which updates previous value
   //spread operator to maintain all data of previous state since useState does not merge
   setuserData({ ...userData, [event.target.name]: event.target.value })
 }

 function validate(userData, isRegister){
   let errors = {};

  if(!userData.email){
    errors.email = "Email Required";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)){
    errors.email = "Email address invalid";
  }
  if(!userData.password){
    errors.password = "Password is required";
  }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,32}$/){
    errors.password = "Password must be atleast 8 characters and include one uppercase, one lowercase, and a special character";
  }


  if(isRegister){   
    if(!userData.firstName.trim() || !userData.lastName.trim()){
       errors.username = "First and last name are required";
    }
    if(!userData.password2){
       errors.password2 = "Confirmation password is required";
    }else if(userData.password !== userData.password2){
      errors.password2 = "Passwords do not match";
    }
  }
   return errors;
  }

 const onSubmit = (e,isRegister) => {
   e.preventDefault();
   setErrors(validate(userData,isRegister))
   }
 

 return {onTextChange, userData, onSubmit}
};

export default useRegisterForm;
