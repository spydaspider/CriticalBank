/* const mongoose = require('mongoose');
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
TransactionSchema.pre('save', async function (next) {
   const Account = require('./models/Account'); // Import Account model

   if (this.type === 'withdrawal' || this.type === 'transfer') {
       const fromAccount = await Account.findById(this.fromAccount);

       if (!fromAccount) 
           return next(new Error('Source account not found'));

       const currentBalance = parseFloat(fromAccount.balance.toString());
       const transactionAmount = parseFloat(this.amount.toString());

       if (transactionAmount > currentBalance) {
           return next(new Error('Insufficient balance'));
       }

       // Deduct balance before saving
       fromAccount.balance = mongoose.Types.Decimal128.fromString((currentBalance - transactionAmount).toFixed(2));
       await fromAccount.save();
   }

   if (this.type === 'deposit' || this.type === 'transfer') {
       const toAccount = await Account.findById(this.toAccount);

       if (!toAccount) return next(new Error('Destination account not found'));

       const toBalance = parseFloat(toAccount.balance.toString());
       const transactionAmount = parseFloat(this.amount.toString());

       // Add balance
       toAccount.balance = mongoose.Types.Decimal128.fromString((toBalance + transactionAmount).toFixed(2));
       await toAccount.save();
   }

   next();
});
module.exports = mongoose.model('Transaction', TransactionSchema);
 */