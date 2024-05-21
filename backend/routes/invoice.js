const express = require('express')
const router = express.Router()
const invoice = require('../controllers/invoice')
const account = require('../controllers/accounts')

router.get('/', account.verifyToken, invoice.getInvoices)

router.get('/all', account.verifyToken, invoice.getAllInvoices)

//get one payment
router.get('/:id', account.verifyToken, invoice.getInvoice)

router.get('/admin/:id', account.verifyToken, invoice.getAdminInvoice)

//add one invoice
router.post('/', account.verifyToken, invoice.addInvoice)

//pay invoice
router.put('/', account.verifyToken, invoice.payInvoice)


module.exports = router