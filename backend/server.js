const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const users = require('./routes/users.js');
const app = express();
app.use(express.json());
app.use((req,res, next)=>{
    console.log(req.path, req.body);
    next();
})
const PORT = process.env.PORT || 5000
 app.use('/api/users',users);
 mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to the mongoose server on ", PORT);
    })
}).catch((error)=>{
    console.error(error.message);
})