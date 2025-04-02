const express = require('express');
const auth = require('../middleware/auth.js');
const {createAccount} = require('../controllers/bankAccount.js');
const router = express.Router();
router.use(auth);
router.post('/', createAccount);
module.exports = router;