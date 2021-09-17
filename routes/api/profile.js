const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile')
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
const { exists } = require('../../models/Profile');

//@route        GET api/profile/user
//@desciption   Fetch current token profile
//access level  Public
router.get('/user', auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user','name');

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }
        

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

//@route        POST api/profile/user
//@desciption   Create or update profile
//access level  Public
router.post('/', auth,
async(req,res) => {

    //pull variables from body using object destructuring 
    const { location, status, bio } = req.body;

    //PROFILE INITIALIZATION
    const userData = {};
    userData.user = req.user.id;
    if(location) userData.location = location;
    if(bio) userData.bio = bio;
    if(status) userData.status = status;
    
    try {
       let profile = await Profile.findOne({ user: req.user.id });

        //If profile exists update info
        if(profile){
            profile = await Profile.findOneAndUpdate(
            { user: req.user.id},
            { $set: userData },
            { new: true });

            return res.json(profile)
        }

        //Else create a new profile
        profile = new Profile(userData);
        await profile.save();
        res.json(profile);

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        }

});

//@route        GET api/profile
//@desciption   Get all profiles
//access level  Public
router.get('/', async (req,res) => {
    try {
        //.populate('user', ['name']) includes user reference with name and avatar fields
        const profiles = await Profile.find().populate('user', ['name', 'email']);

        res.json(profiles);

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


//@route        GET api/profile/user/:user_id
//@desciption   Get user by id
//access level  Public
router.get('/user/:user_id', async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user',['name','email']);
        res.json(profile);
        
        if(!profile)
        return res.status(400).json({msg: 'Profile not found'});

    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg: 'Profile not found'});
        }
        res.status(500).send('Server Error');
    }
    
    });

//@route        Delete api/profile/user/:user_id
//@desciption   Delete profile, user & posts
//access level  Private
router.delete('/', auth, async (req,res) => {
    try {
        //removes profile
        await Profile.findOneAndRemove({ user: req.user._id});
        
        //removes user
        await User.findOneAndRemove({ user: req.user._id });

        res.json({ msg: "User and Profile have been removed "});
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    });



module.exports = router;
