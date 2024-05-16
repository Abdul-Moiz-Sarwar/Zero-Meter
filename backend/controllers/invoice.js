const invoice = require('../models/invoice')

//get all invoice
const getInvoices = (req, res) => { 
    try{
        invoice.find({payee:req.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL INVOICES' });
    }
}

//get one invoice
const getInvoice = async (req, res) => {
    try {
        const InvoiceData = await invoice.findOne({ _id: req.params.id, payee:req.id});
        if (!InvoiceData) {
            return res.status(404).json({ message: "invoice not found" });
        }
        return res.status(200).json(InvoiceData);
    } catch (error) {
        console.error('Error fetching invoice:', error);
        return res.status(500).json({ error: 'Internal Server Error during GET INVOICE' });
    }
}

//add one invoice
const addInvoice = (req, res) => {
    const requiredFields = ['ad', 'amount'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var inv = new invoice()
    inv.payee = req.id
    inv.ad = req.body.ad
    inv.amount = req.body.amount
    inv.status = 'unpaid'
    inv.datecreated = Date.now()
    inv.datepaid = null
    inv.datedue = new Date(Date.now() + 1000 * 30 * 3600 * 24 * 7) //one week
    try{
        inv.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error saving invoice:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Invoice' });
    }
}

module.exports.getInvoice = getInvoice
module.exports.getInvoices = getInvoices
module.exports.addInvoice = addInvoice