const express = require('express')
const router = express.Router()
const invoice = require('../controllers/invoice')
const account = require('../controllers/accounts')

//LAIBA MADE CHANGES HERE I temporarily turned these isUsers to isDealer although all should have access to invoices
router.get('/', account.verifyToken, invoice.getInvoices)

//get one payment
router.get('/:id', account.verifyToken, invoice.getInvoice)

//add one invoice
router.post('/', account.verifyToken, invoice.addInvoice)

//pay invoice
router.put('/', account.verifyToken, invoice.payInvoice)


module.exports = router