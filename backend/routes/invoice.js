const express = require('express')
const router = express.Router()
const invoice = require('../controllers/invoice')
const account = require('../controllers/accounts')

//get all payments
router.get('/', account.verifyToken, account.isUser, invoice.getInvoices)

//get one payment
router.get('/:id', account.verifyToken, account.isUser, invoice.getInvoice)

//add one payment
router.post('/', account.verifyToken, account.isDealer, invoice.addInvoice)


module.exports = router