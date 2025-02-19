const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'});

}
const signup = async(req, res) =>{
    const { username, email, dOB, passportNumber, password} = req.body;
    try{
          const user = await User.signup(username, email, dOB, passportNumber, password);
          const token = createToken(user.id);
          res.status(200).json({email, token});
    }
    catch(error){
         res.status(400).json({error:error.message});
    }
}
const login = async(req, res) =>{
    const { email, password } = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user.id);
        res.status(200).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}
module.exports = { signup, login}