const express = require('express');
//Router used to handle http requests, GET POST
const router = express.Router();
const {check, validationResult} = require('express-validator');
//Secure passwords
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

//@route        POST api/users
//@desciption   Create User
//access level  Public
router.post('/',[
    
    //Name can't be empty, if so send 'Name is required' message
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name must be atleast 2 characters').isLength({ min: 2 }),
    check('email', 'Please include a valid email').isEmail(),
    //Password regex for one upper,one lower, one number, and one special character between 8 and 32 chars long 
    check('password', 'Password must be atleast 8 characters and include one uppercase, one lowercase, and a special character').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,32}$/, "i")
],
    
    async (req,res) => {
        
        //if there are errors send 400 status and json list of errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        //pulls the name email and pass vars from req.body
        const { name, age, gender, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            
            //see if user exists
            if(user){
                return res.status(400).json({ errors: [ { msg: 'User already exists' }]});
            }
        
            user = new User({
                name,
                age,
                gender,
                email,
                password
            });

            //encrypt password using bcrypt
            const salt = await bcrypt.genSalt(10);
            
            user.password = await bcrypt.hash(password, salt);
            
            await user.save();
        
        
            //create payload
            const payload = {
                user: {
                    id: user.id
                }
            };

            //return jsonwebtoken
            jwt.sign(payload,config.get('jwtSecret'),
             { expiresIn: "1h" },
             (err,token) =>{
                 if (err) throw err;
                 res.json({ token });
            });
            
        } catch(err){ 
        console.error(err.message);
        res.status(500).send('Server error');
        }
});

module.exports = router;