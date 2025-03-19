const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
     balance: {
        type: String,
        required: true 
     }  
},{timestamps:true})
module.exports = mongoose.model('Transaction', TransactionSchema);