const Account = require('../models/bankAccount.js');
const generateAccountNumber = require('../helpers/generateAccountNumber.js');
//create account for holder
const createAccount = async(req,res)=>{
    const user_id = req.user._id;
    const {accountName, idNumber, balance } = req.body;
    try{
        //generateAccount Number for the user.
        const accountNumber = generateAccountNumber();
    
         const account = await Account.create({accountName,idNumber, balance, user:user_id, accountNumber: 'ACC'+accountNumber });
        res.status(200).json(account); 

    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }

}
module.exports = {
    createAccount
}
