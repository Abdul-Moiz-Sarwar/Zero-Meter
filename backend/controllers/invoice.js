const invoice = require('../models/invoice')
const ad = require('../models/ad'); 

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

const getAdminInvoice = async (req, res) => {
    try {
        const InvoiceData = await invoice.findOne({ _id: req.params.id});
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
/*const addInvoice = (req, res) => {
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
}*/

const addInvoice = async (req, res) => {
    const requiredFields = ['ad', 'amount'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    try {
        const adModel = await ad.findById(req.body.ad);
        
        if (!adModel) {
            return res.status(404).json({ error: "Ad not found" });
        }

        const i = await invoice.findOne({ad:adModel._id})

        if (i) {
            return res.status(404).json({ error: "invoice already created" });
        }

        const inv = new invoice({
            payee: req.id,
            ad: adModel._id, 
            amount: req.body.amount,
            status: 'unpaid',
            datecreated: Date.now(),
            datepaid: null,
            datedue: new Date(Date.now() + 1000 * 30 * 3600 * 24 * 7) // One week
        });

        const savedInvoice = await inv.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        console.error('Error saving invoice:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Invoice' });
    }
}

const payInvoice = async (req, res) => {
    try {
        const user = await Accounts.User.findById(req.body.userId, "-password");
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            // need to be incooperated
            // customer: user.customerId,
            // payment_method: req.body.paymentMethodId,
            description: 'Payment for invoice',
            confirm: true,
        });

        if (paymentIntent.status === 'succeeded') {
            const updatedInvoice = await invoice.findOneAndUpdate(
                { _id: req.body.invoiceId },
                {
                    $set: {
                        status: 'paid',
                        datapaid: Date.now(),
                    },
                },
                { new: true }
            );

            res.json({ success: true, invoice: updatedInvoice });
        } else {
            res.json({ success: false, error: 'Payment not successful' });
        }
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Internal Server Error during payment processing' });
    }
};

//get all invoice
const getAllInvoices = (req, res) => { 
    try{
        invoice.find()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL INVOICES' });
    }
}

module.exports.getAllInvoices = getAllInvoices
module.exports.getAdminInvoice = getAdminInvoice
module.exports.getInvoice = getInvoice
module.exports.getInvoices = getInvoices
module.exports.addInvoice = addInvoice
module.exports.payInvoice = payInvoice