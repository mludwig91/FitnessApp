const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const config = require('config');


//app.get, app.post specifies what to do when these requests are made

//@route        GET api/auth
//@desciption   Retrieve user
//access level  Public
router.get('/', auth, async (req,res) => {
    try{
        //.select('-password') leaves out password for security purposes
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route        Post api/auth
//@desciption   Authenticate user & get token
//access level  Public
router.post('/',
    [    
    //verify email
    check('email', 'Please include a valid email').isEmail(),
    
    //verify password
    check('password', 'Password is required').exists()
    ],

    async (req,res) => {
        
        //if there are errors in body
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        //pulls the email and password vars from req.body
        const { email, password } = req.body;

        try {
            //get user from database
            let user = await User.findOne({ email });
            
            //if not user
            if(!user){
                return res.status(400).json({ errors: [ { msg: 'Invalid Login' }]});
            }
        
            //check password with bcrypt, 
            const secure = await bcrypt.compare( password , user.password );
            if(!secure){
                return res.status(400).json({ errors: 'Invalid Login' });
            }

            //build payload,usually just id
            const payload = {
                user: {
                    id: user.id
                }
            };
            
            //return jsonwebtoken
            jwt.sign(payload,config.get('jwtSecret'),
             { expiresIn: 360000 },
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