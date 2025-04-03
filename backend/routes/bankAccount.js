const express = require('express');
const auth = require('../middleware/auth.js');
const {createOrUpdate, getAccounts, getAccount,deleteAccount} = require('../controllers/bankAccount.js');
const router = express.Router();
router.use(auth);
router.post('/', createOrUpdate);
router.get('/', getAccounts);
router.get('/:id', getAccount);
router.delete('/:id', deleteAccount);

module.exports = router;