const Account = require('../models/bankAccount.js');
const mongoose = require('mongoose');
const generateAccountNumber = require('../helpers/generateAccountNumber.js');
//create account for holder
const createOrUpdate = async(req,res)=>{
    const user_id = req.user._id;
    const {accountName, idNumber, balance } = req.body;
    if(!accountName || !idNumber || !balance)
    {
        throw Error('Fill in the forms');
    }
    const accountExists = await Account.find({user: user_id});
    if(accountExists){
    
    
    try{
           const account = await Account.findOneAndUpdate({user: user_id},{
            ...req.body 
           }, {new:true})
           res.status(200).json(account);

    }
    catch(error)
    {
         res.status(400).json({error: error.message});
    }
    }
    else{
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
    

}

const getAccounts = async(req, res)=>{
    const user_id = req.user._id;
    try{
         const account = await Account.find({user: user_id});
         res.status(200).json(account); 
    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }
}
const getAccount = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error: error.message});
    }
    try{
          const account = await Account.findById({_id:id});
          res.status(200).json(account);
    }
    catch(error)
    {
         res.status(400).json({error: error.message});
    }
}
const deleteAccount = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(400).json({error: error.message});
    }
    try{
          const account = await Account.findOneAndDelete({_id: id});
          res.status(200).json(account);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}
module.exports = {
    createOrUpdate, getAccounts, getAccount, deleteAccount
}
