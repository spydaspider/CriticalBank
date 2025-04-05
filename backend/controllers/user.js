const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
/* const sendBrevoEmail = require("../utils/sendBrevoEmail"); // Adjust path if needed
 */
const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'});

}
const signup = async(req, res) =>{
    const { username, email, password} = req.body;
    try{
          const user = await User.signup(username, email, password);
          const token = createToken(user.id);
          const userId = user.id;
          res.status(200).json({email, token, userId});
        /*   await sendBrevoEmail({
            subject: "Welcome to Our Platform!",
            to: [{ email: newUser.email, name: newUser.name }],
            emailTemplate: `<p>Hello ${newUser.name},</p><p>Welcome to our platform! We're glad to have you.</p>`,
        }); */


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
        const userId = user.id;
        res.status(200).json({email, token, userId});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}
module.exports = { signup, login}