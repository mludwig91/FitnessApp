import { useState, useEffect } from 'react'
const axios = require('axios');

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

  /*handle dynamic text change in form.
  State component renders after each update!
  */
 function onTextChange(event){
   //setuserData can take function which updates previous value
   //spread operator to maintain all data of previous state since useState does not merge
   setuserData({ ...userData, [event.target.name]: event.target.value })
 }

 const onSubmit = async (e) => {
   e.preventDefault();
   
   if(userData.password !== userData.password2){
     console.log("Passwords do not match")
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
 
 return {onTextChange, userData, onSubmit}
};

export default useRegisterForm;
