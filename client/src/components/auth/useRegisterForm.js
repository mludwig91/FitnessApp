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

 const onSubmit = async (e) => {
   e.preventDefault();
   
   if(userData.password !== userData.password2){
     console.log("PASS")
   }
   const newUser ={
     name,
     email,
     password
   }
   try {
     const config = {
       header : {
         'Content-Type': 'application/json'
       }
     }
     const body = JSON.stringify(newUser);
     res = await axios.post('/api/users', body, config);
     console.log(res.data)
   } catch (error) {
     console.error(err.response.data)
   }
   }
 

 return {onTextChange, userData, onSubmit}
};

export default useRegisterForm;
