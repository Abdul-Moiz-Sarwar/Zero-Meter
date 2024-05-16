const express = require('express')
const router = express.Router()
const payment = require('../controllers/payment')
const account = require('../controllers/accounts')

//get all payments
router.get('/', account.verifyToken, account.isUser, payment.getPayments)

//get one payment
router.get('/:id', account.verifyToken, account.isUser, payment.getPayment)

//add one payment
router.post('/', account.verifyToken, account.isUser, payment.addPayment)

//update one payment
router.put('/:id', account.verifyToken, account.isUser, payment.updatePayment)

//delete one payment
router.delete('/:id', account.verifyToken, account.isUser, payment.deletePayment)

module.exports = router