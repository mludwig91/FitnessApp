const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){

    //Grab token from request
    const token = req.query['x-auth-token'];
    //if no token
    if(!token){
        //401 no auth response
        return res.status(401);
    }

    try{
        //if token is valid decode it and assign to user
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //can now use req.user in any routes
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({ msg: 'Token is not valid'} );
    }
}