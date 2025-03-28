const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
     amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        default: '0.0', // or: default: mongoose.Types.Decimal128.fromString('0.0') 
     },
     type:{
        type: String,
        enum: ['deposit', 'withdrawal', 'transfer'],
        required: true 
     },
     fromAccount:{
        type: String,
        required: function(){
            return this.type === 'withdrawal' || this.type === 'transfer'; 
        }
     },
     toAccount:{
         type: String,
         required: function(){
            return this.type === 'deposit' || this.type === 'transfer';
         }
     },
     description:{
        type:String,
     },
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    },
    transactionDate:{
        type: Date,
        default: Date.now 
    } 

},{timestamps:true})
module.exports = mongoose.model('Transaction', TransactionSchema);
